import { useMemo, useState } from 'react'
import {
  calculateFlowModel,
  flowDefaults,
  flowPresets,
  flowRanges,
  modelAssumptions,
} from '../data/flowLabModel'

const inputs = [
  ['collectionRate', 'Collection capacity', 'Source collection / production rate.'],
  ['fleetCount', 'Fleet count', 'Available transport units in the scenario.'],
  ['payload', 'Payload', 'Modeled payload per completed trip.'],
  ['oneWayDistance', 'One-way distance', 'Source-to-destination route distance.'],
  ['averageSpeed', 'Average speed', 'Scenario average, not maximum vehicle speed.'],
  ['loadingMinutes', 'Loading time', 'Average loading duration per trip.'],
  ['unloadingMinutes', 'Unloading time', 'Average unloading duration per trip.'],
  ['delayMinutes', 'Other delay', 'Queue / checkpoint / turnaround allowance per trip.'],
  ['operatingHours', 'Operating hours', 'Scheduled operating window per day.'],
  ['availabilityPct', 'Fleet availability', 'Effective availability after modeled downtime.'],
  ['destinationDemand', 'Destination demand', 'Required material delivery per day.'],
  ['stockpileCapacity', 'Source buffer capacity', 'Maximum source-side stockpile capacity.'],
  ['initialStock', 'Initial source stock', 'Material already available at start of the day.'],
]

function round(value, digits = 0) {
  if (!Number.isFinite(value)) return '—'
  return value.toFixed(digits)
}

function Metric({ label, value, unit, emphasis = false }) {
  return (
    <div className={emphasis ? 'flow-metric flow-metric-emphasis' : 'flow-metric'}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{unit}</small>
    </div>
  )
}

export default function SupplyChainFlowLab() {
  const [values, setValues] = useState(flowDefaults)
  const [baseline, setBaseline] = useState(flowDefaults)
  const result = useMemo(() => calculateFlowModel(values), [values])
  const baselineResult = useMemo(() => calculateFlowModel(baseline), [baseline])

  const delta = result.deliverableSupply - baselineResult.deliverableSupply

  function setValue(key, value) {
    setValues((current) => ({ ...current, [key]: Number(value) }))
  }

  function applyPreset(key) {
    setValues({ ...flowPresets[key].values })
  }

  return (
    <div className="flowlab-page" id="top">
      <header className="flowlab-nav">
        <a className="flowlab-brand" href="./labs.html">
          <span>N</span><div><strong>NIYATA</strong><small>LAB-05 / FLOW LAB</small></div>
        </a>
        <nav><a href="#model">Model</a><a href="#operate">Operate</a><a href="#assumptions">Assumptions</a></nav>
        <a className="flowlab-nav-cta" href="#operate">Run scenario ↓</a>
      </header>

      <main>
        <section className="flowlab-hero">
          <div className="flowlab-hero-grid">
            <div>
              <div className="flowlab-meta"><span>LAB-05</span><span>INDUSTRIAL ENGINEERING</span><span>DETERMINISTIC PROTOTYPE</span></div>
              <p className="flowlab-kicker">SUPPLY CHAIN FLOW LAB</p>
              <h1>Make the constraint visible before optimizing the system.</h1>
            </div>
            <div>
              <p className="flowlab-intro">
                An interactive one-day capacity model connecting source inflow,
                fleet cycle time, buffer stock and destination demand.
              </p>
              <div className="flowlab-boundary">
                <span>MODEL BOUNDARY</span>
                <p>Illustrative deterministic model. Not an operational planning engine.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flowlab-strip">
          <span>SOURCE</span><b>→</b><span>BUFFER</span><b>→</b><span>LOAD</span><b>→</b>
          <span>TRANSPORT</span><b>→</b><span>UNLOAD</span><b>→</b><span>DEMAND</span>
        </section>

        <section className="flowlab-section" id="model">
          <div className="flowlab-section-label"><span>01</span><p>MODEL LOGIC</p></div>
          <div className="flowlab-model-grid">
            <div>
              <p className="flowlab-kicker">CONSTRAINED FLOW</p>
              <h2>The smallest capacity is not always the only operational problem.</h2>
              <p>
                The hardened model separates source material availability from
                transport capacity, then checks demand coverage and source-buffer
                consequence.
              </p>
            </div>
            <div className="flowlab-formulas">
              <div><span>F-01</span><strong>Cycle time</strong><p>2 × distance ÷ speed + load + unload + delay</p></div>
              <div><span>F-02</span><strong>Effective fleet hours</strong><p>operating hours × availability</p></div>
              <div><span>F-03</span><strong>Transport capacity</strong><p>fleet × trips/unit × payload</p></div>
              <div><span>F-04</span><strong>Available material</strong><p>initial source stock + daily collection</p></div>
              <div><span>F-05</span><strong>Deliverable supply</strong><p>min(transport capacity, available material)</p></div>
              <div><span>F-06</span><strong>End source buffer</strong><p>available material − planned dispatch, capped by storage</p></div>
            </div>
          </div>
        </section>

        <section className="flowlab-section flowlab-operate" id="operate">
          <div className="flowlab-section-label"><span>02</span><p>OPERATE / INTERACTIVE SCENARIO</p></div>

          <div className="flowlab-presets">
            {Object.entries(flowPresets).map(([key, preset]) => (
              <button key={key} type="button" onClick={() => applyPreset(key)}>{preset.label}</button>
            ))}
            <button className="flowlab-baseline-button" type="button" onClick={() => setBaseline({ ...values })}>Set current as baseline</button>
          </div>

          <div className="flowlab-console">
            <div className="flowlab-inputs">
              <div className="flowlab-panel-head"><span>SCENARIO INPUTS</span><small>13 explicit assumptions</small></div>
              {inputs.map(([key, label, helper]) => {
                const range = flowRanges[key]
                const maxForInitial = key === 'initialStock' ? Math.max(range.max, values.stockpileCapacity) : range.max
                return (
                  <label className="flowlab-input-row" key={key}>
                    <div><strong>{label}</strong><small>{helper}</small></div>
                    <div>
                      <div className="flowlab-input-value"><span>{round(values[key], 0)}</span><small>{range.unit}</small></div>
                      <input
                        type="range"
                        min={range.min}
                        max={maxForInitial}
                        step={range.step}
                        value={values[key]}
                        onChange={(event) => setValue(key, event.target.value)}
                      />
                    </div>
                  </label>
                )
              })}
            </div>

            <div className="flowlab-output">
              <div className="flowlab-panel-head"><span>MODEL OUTPUT</span><small>{result.constraint}</small></div>
              <div className="flowlab-constraint">
                <span>BINDING SIGNAL</span>
                <strong>{result.constraint}</strong>
                <p>{result.constraintDetail}</p>
              </div>

              <div className="flowlab-metrics">
                <Metric label="Deliverable supply" value={round(result.deliverableSupply)} unit="t/day" emphasis />
                <Metric label="Demand coverage" value={round(result.coveragePct)} unit="%" />
                <Metric label="Cycle time" value={round(result.cycleTimeHours, 2)} unit="h/trip" />
                <Metric label="Trips / unit" value={round(result.tripsPerUnit, 2)} unit="trip/day" />
                <Metric label="Transport capacity" value={round(result.transportCapacity)} unit="t/day" />
                <Metric label="Collection capacity" value={round(result.collectionCapacity)} unit="t/day" />
                <Metric label="Unmet demand" value={round(result.unmetDemand)} unit="t/day" />
                <Metric label="End source buffer" value={round(result.endStock)} unit="t" />
              </div>

              <div className="flowlab-comparison">
                <span>VS BASELINE</span>
                <strong>{delta >= 0 ? '+' : ''}{round(delta)} t/day deliverable supply</strong>
                <p>Baseline {round(baselineResult.deliverableSupply)} t/day · Current {round(result.deliverableSupply)} t/day</p>
              </div>

              <div className="flowlab-flowbar">
                <div style={{ width: `${Math.min(100, result.coveragePct)}%` }} />
              </div>
              <p className="flowlab-flowbar-label">Demand coverage {round(result.coveragePct)}%</p>
            </div>
          </div>
        </section>

        <section className="flowlab-section flowlab-assumption-section" id="assumptions">
          <div className="flowlab-section-label"><span>03</span><p>ASSUMPTION REGISTER</p></div>
          <div className="flowlab-assumption-intro">
            <h2>The model becomes more credible when the simplifications are visible.</h2>
            <p>These assumptions are part of the interface—not hidden implementation detail.</p>
          </div>
          <div className="flowlab-assumptions">
            {modelAssumptions.map((item) => (
              <article key={item.id}><span>{item.id}</span><h3>{item.title}</h3><p>{item.copy}</p></article>
            ))}
          </div>
        </section>

        <section className="flowlab-section flowlab-validation">
          <div className="flowlab-section-label"><span>04</span><p>VALIDATION STATE</p></div>
          <div className="flowlab-validation-grid">
            <h2>Useful for reasoning. Not validated for dispatch or production planning.</h2>
            <div>
              <div><span>MODEL</span><strong>Deterministic / inspectable</strong></div>
              <div><span>DATA</span><strong>User-entered scenario values</strong></div>
              <div><span>CALIBRATION</span><strong>Not calibrated to a production network</strong></div>
              <div><span>NEXT VALIDATION</span><strong>Compare model outputs against a bounded real or synthetic fixture</strong></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flowlab-footer">
        <div><strong>NIYATA / LAB-05</strong><span>Supply Chain Flow Lab</span></div>
        <a href="./labs.html">Back to Labs ↑</a>
      </footer>
    </div>
  )
}
