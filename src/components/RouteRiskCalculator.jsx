import { useMemo, useState } from 'react'
import { calculateRouteRiskDecision, routeRiskFactors } from '../data/routeRisk'

function initialValues() {
  return Object.fromEntries(routeRiskFactors.map((factor) => [factor.key, factor.options[0].value]))
}

export default function RouteRiskCalculator() {
  const [values, setValues] = useState(initialValues)

  const { score, band, override, weightedBand } = useMemo(
    () => calculateRouteRiskDecision(values),
    [values],
  )

  function updateFactor(key, value) {
    setValues((current) => ({ ...current, [key]: Number(value) }))
  }

  return (
    <section className="rr-tool" id="interactive-demo">
      <div className="rr-tool-header">
        <div>
          <p className="rr-mono-label">OPERATE MODE / INTERACTIVE DEMO</p>
          <h2>Turn six visible assumptions into one inspectable decision.</h2>
        </div>
        <div className="rr-prototype-flag">ILLUSTRATIVE MODEL</div>
      </div>

      <div className="rr-tool-grid">
        <div className="rr-input-panel">
          <div className="rr-input-heading">
            <span>INPUT CONDITIONS</span>
            <small>Prototype weights total 100%</small>
          </div>

          <div className="rr-factor-list">
            {routeRiskFactors.map((factor) => (
              <label className="rr-factor-row" key={factor.key}>
                <div className="rr-factor-meta">
                  <span>{factor.label}</span>
                  <small>{Math.round(factor.weight * 100)}%</small>
                </div>
                <select
                  value={values[factor.key]}
                  onChange={(event) => updateFactor(factor.key, event.target.value)}
                >
                  {factor.options.map((option) => (
                    <option value={option.value} key={option.label}>
                      {option.label} — {option.value}
                    </option>
                  ))}
                </select>
                <small className="rr-factor-helper">{factor.helper}</small>
              </label>
            ))}
          </div>
        </div>

        <div className={`rr-output-panel rr-state-${band.key}`}>
          <div className="rr-output-top">
            <span className="rr-mono-label">DECISION OUTPUT</span>
            <span>{band.action}</span>
          </div>

          <div className="rr-score-block">
            <small>ROUTE RISK SCORE</small>
            <strong>{score}</strong>
            <span>/ 100</span>
          </div>

          <div className="rr-risk-band">
            <span>STATE</span>
            <strong>{band.label}</strong>
          </div>

          {override && <p className="rr-hard-stop" role="alert">{override}: Weighted score {score}/100 ({weightedBand.label}) is not dispatch clearance.</p>}
          <p className="rr-recommendation">{band.recommendation}</p>

          <div className="rr-formula">
            <span>FORMULA</span>
            <p>
              Road 22% + Weather 20% + Accessibility 18% + Traffic 14% +
              Terrain 14% + Safety 12%
            </p>
          </div>
        </div>
      </div>

      <div className="rr-safety-note">
        <span>MODEL BOUNDARY</span>
        <p>
          This calculator is a portfolio demonstration. Factor values and
          weights are illustrative and are not a validated safety standard.
          Real dispatch decisions must follow field inspection, applicable
          procedures, weather / hazard warnings and authorized approval.
        </p>
      </div>
    </section>
  )
}
