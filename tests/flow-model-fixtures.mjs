import assert from 'node:assert/strict'
import { calculateFlowModel, flowDefaults } from '../src/data/flowLabModel.js'
import { calculateRouteRiskDecision, routeRiskFactors } from '../src/data/routeRisk.js'

function near(actual, expected, tolerance = 0.01) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} !~= ${expected}`)
}

const balanced = calculateFlowModel(flowDefaults)
assert.equal(balanced.constraint, 'BALANCED')
near(balanced.cycleTimeHours, 2.6666667)
near(balanced.transportCapacity, 510)
near(balanced.collectionCapacity, 480)
near(balanced.deliverableSupply, 510)
near(balanced.endStock, 320)

const transport = calculateFlowModel({ ...flowDefaults, fleetCount: 2, destinationDemand: 500 })
assert.equal(transport.constraint, 'TRANSPORT')
near(transport.deliverableSupply, 255)
near(transport.unmetDemand, 245)

const source = calculateFlowModel({ ...flowDefaults, collectionRate: 12, destinationDemand: 500, initialStock: 80 })
assert.equal(source.constraint, 'SOURCE / MATERIAL')
near(source.availableMaterial, 320)
near(source.unmetDemand, 180)

const overflow = calculateFlowModel({
  ...flowDefaults,
  collectionRate: 60,
  operatingHours: 24,
  fleetCount: 15,
  payload: 40,
  oneWayDistance: 5,
  averageSpeed: 70,
  loadingMinutes: 10,
  unloadingMinutes: 10,
  delayMinutes: 0,
  destinationDemand: 100,
  initialStock: 1000,
  stockpileCapacity: 600,
})
assert.equal(overflow.constraint, 'BUFFER OVERFLOW')
assert.ok(overflow.overflow > 0)

const lowBuffer = calculateFlowModel({
  ...flowDefaults,
  collectionRate: 20,
  operatingHours: 20,
  initialStock: 10,
  destinationDemand: 400,
  stockpileCapacity: 600,
})
assert.equal(lowBuffer.constraint, 'LOW BUFFER')
near(lowBuffer.endStock, 10)


const initialOverflow = calculateFlowModel({
  ...flowDefaults,
  initialStock: 825,
  stockpileCapacity: 800,
  destinationDemand: 225,
})
assert.equal(initialOverflow.initialStockExcess, 25)
assert.equal(initialOverflow.constraint, 'BUFFER OVERFLOW')
assert.ok(initialOverflow.overflow > 0)
assert.match(initialOverflow.constraintDetail, /Initial source stock already exceeds/)

const initialOnly = calculateFlowModel({
  ...flowDefaults,
  initialStock: 825,
  stockpileCapacity: 800,
  destinationDemand: 1200,
  collectionRate: 5,
  fleetCount: 15,
  payload: 40,
  oneWayDistance: 5,
  averageSpeed: 70,
  loadingMinutes: 10,
  unloadingMinutes: 10,
  delayMinutes: 0,
  operatingHours: 24,
})
assert.equal(initialOnly.initialStockExcess, 25)
assert.equal(initialOnly.overflow, 0)
assert.equal(initialOnly.constraint, 'INITIAL BUFFER OVER CAPACITY')

const lowRisk = Object.fromEntries(routeRiskFactors.map((f) => [f.key, f.options[0].value]))
const normalRoute = calculateRouteRiskDecision(lowRisk)
assert.equal(normalRoute.override, null)
assert.equal(normalRoute.band.key, 'low')

const blocked = calculateRouteRiskDecision({ ...lowRisk, accessibility: 90 })
assert.equal(blocked.override, 'ACCESSIBILITY HARD STOP')
assert.equal(blocked.band.key, 'hold')
assert.equal(blocked.band.action, 'DO NOT DISPATCH / VERIFY ACCESS')
assert.ok(blocked.score < 34, 'Hard stop must override even a low weighted score')

const critical = calculateRouteRiskDecision({ ...lowRisk, safety: 90 })
assert.equal(critical.override, 'SAFETY HARD STOP')
assert.equal(critical.band.key, 'hold')

console.log('PASS: 7 Flow Lab fixtures + 3 RouteRisk decision fixtures')
