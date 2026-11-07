export const flowDefaults = {
  collectionRate: 24,
  fleetCount: 4,
  payload: 20,
  oneWayDistance: 30,
  averageSpeed: 40,
  loadingMinutes: 30,
  unloadingMinutes: 25,
  delayMinutes: 15,
  operatingHours: 20,
  availabilityPct: 85,
  destinationDemand: 400,
  stockpileCapacity: 600,
  initialStock: 240,
}

export const flowRanges = {
  collectionRate: { min: 5, max: 60, step: 1, unit: 't/h' },
  fleetCount: { min: 1, max: 15, step: 1, unit: 'units' },
  payload: { min: 10, max: 40, step: 1, unit: 't/trip' },
  oneWayDistance: { min: 5, max: 120, step: 5, unit: 'km' },
  averageSpeed: { min: 15, max: 70, step: 5, unit: 'km/h' },
  loadingMinutes: { min: 10, max: 120, step: 5, unit: 'min' },
  unloadingMinutes: { min: 10, max: 120, step: 5, unit: 'min' },
  delayMinutes: { min: 0, max: 120, step: 5, unit: 'min' },
  operatingHours: { min: 8, max: 24, step: 1, unit: 'h/day' },
  availabilityPct: { min: 40, max: 100, step: 5, unit: '%' },
  destinationDemand: { min: 100, max: 1200, step: 25, unit: 't/day' },
  stockpileCapacity: { min: 100, max: 1500, step: 50, unit: 't' },
  initialStock: { min: 0, max: 1500, step: 25, unit: 't' },
}

export const flowPresets = {
  baseline: {
    label: 'Balanced baseline',
    values: flowDefaults,
  },
  longRoute: {
    label: 'Long route',
    values: { ...flowDefaults, oneWayDistance: 75, averageSpeed: 35, delayMinutes: 30 },
  },
  fleetConstrained: {
    label: 'Fleet constrained',
    values: { ...flowDefaults, fleetCount: 2, destinationDemand: 500 },
  },
  sourceConstrained: {
    label: 'Source constrained',
    values: { ...flowDefaults, collectionRate: 12, destinationDemand: 500, initialStock: 80 },
  },
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export function calculateFlowModel(input) {
  const safe = {
    ...flowDefaults,
    ...Object.fromEntries(
      Object.entries(input || {}).map(([key, value]) => [key, Number(value)])
    ),
  }

  const travelHours = safe.averageSpeed > 0
    ? (2 * safe.oneWayDistance) / safe.averageSpeed
    : Infinity

  const serviceHours =
    (safe.loadingMinutes + safe.unloadingMinutes + safe.delayMinutes) / 60

  const cycleTimeHours = travelHours + serviceHours
  const effectiveFleetHours =
    safe.operatingHours * clamp(safe.availabilityPct, 0, 100) / 100

  const tripsPerUnit = Number.isFinite(cycleTimeHours) && cycleTimeHours > 0
    ? effectiveFleetHours / cycleTimeHours
    : 0

  const totalTrips = tripsPerUnit * Math.max(0, safe.fleetCount)
  const transportCapacity = totalTrips * Math.max(0, safe.payload)

  const collectionCapacity =
    Math.max(0, safe.collectionRate) * Math.max(0, safe.operatingHours)

  const availableMaterial =
    Math.max(0, safe.initialStock) + collectionCapacity

  const deliverableSupply = Math.min(transportCapacity, availableMaterial)
  const demand = Math.max(0, safe.destinationDemand)
  const plannedDispatch = Math.min(deliverableSupply, demand)

  const unmetDemand = Math.max(0, demand - deliverableSupply)
  const spareCapacity = Math.max(0, deliverableSupply - demand)
  const coveragePct = demand > 0 ? (deliverableSupply / demand) * 100 : 100

  const initialStockExcess = Math.max(0, safe.initialStock - Math.max(0, safe.stockpileCapacity))
  const rawEndStock = availableMaterial - plannedDispatch
  const endStock = clamp(rawEndStock, 0, Math.max(0, safe.stockpileCapacity))
  const overflow = Math.max(0, rawEndStock - Math.max(0, safe.stockpileCapacity))
  const endStockPct = safe.stockpileCapacity > 0
    ? (endStock / safe.stockpileCapacity) * 100
    : 0

  const effectiveTonsPerUnitDay = tripsPerUnit * Math.max(0, safe.payload)
  const requiredFleet = effectiveTonsPerUnitDay > 0
    ? demand / effectiveTonsPerUnitDay
    : Infinity

  let constraint = 'BALANCED'
  let constraintDetail = 'Demand is covered within the current deterministic assumptions.'

  if (overflow > 0) {
    constraint = 'BUFFER OVERFLOW'
    constraintDetail = initialStockExcess > 0
      ? 'Initial source stock already exceeds buffer capacity. End-of-day material also exceeds modeled storage capacity. Correct the starting stock/capacity assumption and review dispatch or collection pace.'
      : 'Material inflow exceeds modeled dispatch and storage capacity. Review collection pace, dispatch capacity or buffer size.'
  } else if (initialStockExcess > 0) {
    constraint = 'INITIAL BUFFER OVER CAPACITY'
    constraintDetail =
      'Initial source stock exceeds physical buffer capacity, even though the modeled end-of-day balance is within capacity. Correct the starting condition before interpreting this scenario.'
  } else if (unmetDemand > 0) {
    const materialLimited = availableMaterial <= transportCapacity
    if (materialLimited) {
      constraint = 'SOURCE / MATERIAL'
      constraintDetail =
        'Available material is the binding constraint under the current scenario.'
    } else {
      constraint = 'TRANSPORT'
      constraintDetail =
        'Fleet transport capacity is the binding constraint under the current scenario.'
    }
  } else if (endStockPct < 10 && collectionCapacity < demand * 1.1) {
    constraint = 'LOW BUFFER'
    constraintDetail =
      'Demand is covered, but modeled end-of-day source buffer is low.'
  } else if (spareCapacity > demand * 0.35) {
    constraint = 'EXCESS CAPACITY'
    constraintDetail =
      'The scenario has substantial modeled spare delivery capacity relative to demand.'
  }

  return {
    input: safe,
    travelHours,
    serviceHours,
    cycleTimeHours,
    effectiveFleetHours,
    tripsPerUnit,
    totalTrips,
    transportCapacity,
    collectionCapacity,
    availableMaterial,
    deliverableSupply,
    plannedDispatch,
    demand,
    unmetDemand,
    spareCapacity,
    coveragePct,
    endStock,
    endStockPct,
    initialStockExcess,
    overflow,
    effectiveTonsPerUnitDay,
    requiredFleet,
    constraint,
    constraintDetail,
  }
}

export const modelAssumptions = [
  {
    id: 'A-01',
    title: 'Deterministic cycle time',
    copy: 'Travel, loading, unloading and delay inputs are scenario averages; stochastic variation and queue distributions are not modeled.',
  },
  {
    id: 'A-02',
    title: 'Constant payload',
    copy: 'Every modeled trip uses the selected payload value. Partial loads and payload variability are not modeled.',
  },
  {
    id: 'A-03',
    title: 'Availability as one scalar',
    copy: 'Breaks, maintenance, shift loss and other downtime are compressed into the fleet-availability percentage.',
  },
  {
    id: 'A-04',
    title: 'Source buffer model',
    copy: 'Initial stock plus daily collection forms the material available to dispatch. Initial stock above buffer capacity is flagged separately. The model checks end-of-day stock, not intraday stock peaks, and does not model destination inventory.',
  },
  {
    id: 'A-05',
    title: 'No route interaction',
    copy: 'Congestion, overtaking, weather and shared-road interactions are not simulated except through the average speed and delay inputs.',
  },
  {
    id: 'A-06',
    title: 'One-day static horizon',
    copy: 'The model evaluates one representative day. End stock does not automatically roll into a second day unless used as the next scenario input.',
  },
]
