export const routeRiskFactors = [
  {
    key: 'road',
    label: 'Road condition',
    weight: 0.22,
    helper: 'Surface condition and road integrity.',
    options: [
      { label: 'Good / paved', value: 15 },
      { label: 'Mixed / maintained estate road', value: 35 },
      { label: 'Unpaved / degraded', value: 60 },
      { label: 'Damaged / unstable', value: 85 },
    ],
  },
  {
    key: 'weather',
    label: 'Weather',
    weight: 0.20,
    helper: 'Rain, flood and weather exposure.',
    options: [
      { label: 'Clear / stable', value: 10 },
      { label: 'Light rain', value: 35 },
      { label: 'Heavy rain', value: 65 },
      { label: 'Storm / flood watch', value: 90 },
    ],
  },
  {
    key: 'accessibility',
    label: 'Accessibility',
    weight: 0.18,
    helper: 'Current access, blockage and route availability.',
    options: [
      { label: 'Open / verified', value: 10 },
      { label: 'Minor restriction', value: 35 },
      { label: 'Restricted / uncertain', value: 65 },
      { label: 'Blocked / unverified', value: 90 },
    ],
  },
  {
    key: 'traffic',
    label: 'Traffic',
    weight: 0.14,
    helper: 'Congestion and route interaction.',
    options: [
      { label: 'Low', value: 10 },
      { label: 'Moderate', value: 35 },
      { label: 'High', value: 65 },
      { label: 'Severe congestion', value: 85 },
    ],
  },
  {
    key: 'terrain',
    label: 'Terrain',
    weight: 0.14,
    helper: 'Slope, geometry and terrain exposure.',
    options: [
      { label: 'Flat', value: 15 },
      { label: 'Rolling', value: 35 },
      { label: 'Hilly', value: 60 },
      { label: 'Steep / unstable', value: 85 },
    ],
  },
  {
    key: 'safety',
    label: 'Safety context',
    weight: 0.12,
    helper: 'Local incident, visibility and safety context.',
    options: [
      { label: 'Normal', value: 10 },
      { label: 'Elevated attention', value: 35 },
      { label: 'Recent incident / low visibility', value: 65 },
      { label: 'Critical warning', value: 90 },
    ],
  },
]

export const routeRiskBands = [
  {
    max: 34,
    key: 'low',
    label: 'LOW RISK',
    action: 'PROCEED + MONITOR',
    recommendation:
      'Conditions are within the prototype low-risk band. Continue normal checks and monitor changes before dispatch.',
  },
  {
    max: 69,
    key: 'watch',
    label: 'WATCH',
    action: 'VERIFY BEFORE DISPATCH',
    recommendation:
      'Risk is elevated. Confirm field conditions, identify an alternative route and obtain the required operational approval before dispatch.',
  },
  {
    max: 100,
    key: 'high',
    label: 'HIGH RISK',
    action: 'DELAY / REROUTE / ESCALATE',
    recommendation:
      'Conditions are in the prototype high-risk band. Delay or reroute and escalate according to the applicable safety and operational procedure.',
  },
]

/**
 * A weighted risk score is descriptive, not dispatch clearance.
 * Conservative safety overrides prevent a blocked/unverified route or
 * critical safety warning from being softened by low scores elsewhere.
 * All values remain illustrative, not operationally calibrated.
 */
export function calculateRouteRiskDecision(values) {
  const score = Math.round(routeRiskFactors.reduce(
    (sum, factor) => sum + Number(values[factor.key] ?? factor.options[0].value) * factor.weight,
    0,
  ))
  const weightedBand = routeRiskBands.find((item) => score <= item.max) || routeRiskBands[2]

  if (Number(values.accessibility) === 90) {
    return {
      score,
      weightedBand,
      band: {
        key: 'hold',
        label: 'HOLD — ACCESS NOT VERIFIED',
        action: 'DO NOT DISPATCH / VERIFY ACCESS',
        recommendation:
          'Blocked or unverified access overrides the weighted score. Do not dispatch on this route until access is independently verified, restrictions are resolved and authorized approval is obtained.',
      },
      override: 'ACCESSIBILITY HARD STOP',
    }
  }
  if (Number(values.safety) === 90) {
    return {
      score,
      weightedBand,
      band: {
        key: 'hold',
        label: 'HOLD — CRITICAL SAFETY',
        action: 'DO NOT DISPATCH / ESCALATE',
        recommendation:
          'A critical safety warning overrides the weighted score. Hold dispatch and escalate for field verification and authorized safety clearance.',
      },
      override: 'SAFETY HARD STOP',
    }
  }
  return { score, weightedBand, band: weightedBand, override: null }
}
