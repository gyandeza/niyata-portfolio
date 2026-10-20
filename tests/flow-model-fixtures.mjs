import assert from 'node:assert/strict'
import { calculateFlowModel, flowDefaults } from '../src/data/flowLabModel.js'

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

console.log('PASS: 5 deterministic fixture scenarios')
