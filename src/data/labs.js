export const labs = {
  hero: {
    eyebrow: 'NIYATA LABS',
    title: 'Experiments earn a place here by teaching something useful.',
    copy:
      'Labs is the experimental layer of Niyata: bounded prototypes, decision tools and models that align with the professional thesis and expose their assumptions clearly.',
  },
  publicLabs: [
    {
      id: 'RR-03',
      title: 'RouteRisk',
      status: 'ACTIVE LAB',
      type: 'Operational decision prototype',
      copy:
        'An inspectable route-risk model and interactive decision instrument with explicit assumptions and safety boundaries.',
      href: './routerisk.html',
      evidence: 'Migrated and methodology-aligned',
    },
    {
      id: 'LAB-05',
      title: 'Supply Chain Flow Simulator',
      status: 'ACTIVE LAB',
      type: 'Industrial engineering simulation',
      copy:
        'A hardened deterministic flow-and-capacity simulator connecting source material, fleet cycle time, buffer stock and destination demand with an explicit assumption register.',
      href: './flowlab.html',
      evidence: 'Model hardened and migrated',
    },
  ],
  rules: [
    'Aligned with operations, supply chain, decision systems or applied AI.',
    'Contains a real model, interaction or testable system—not decorative UI only.',
    'Assumptions and limitations can be stated publicly.',
    'Does not expose personal, employer-confidential or commercially sensitive information.',
    'Adds a distinct learning signal beyond existing flagship case studies.',
  ],
}

export const legacyAudit = [
  {
    file: 'Finance.html',
    decision: 'PRIVATE ARCHIVE',
    visibility: 'REMOVE FROM PUBLIC NIYATA',
    relevance: 2,
    evidence: 2,
    privacyRisk: 5,
    salvage: 2,
    designFit: 1,
    reason:
      'Contains concrete personal finance inputs and expense data. The Family Finance architecture can be represented through AI HQ, but this data-bearing dashboard should not remain a public portfolio artifact.',
    salvageNote:
      'Retain only generic interaction ideas after rebuilding with synthetic data; do not reuse personal values.',
  },
  {
    file: 'GardenVilla.html',
    decision: 'ARCHIVE / SEPARATE PROJECT',
    visibility: 'NOT NIYATA LABS',
    relevance: 1,
    evidence: 2,
    privacyRisk: 4,
    salvage: 2,
    designFit: 1,
    reason:
      'Hospitality / booking landing page with commercial packages and a direct booking endpoint. It does not support the current professional thesis and should be separated if the business remains active.',
    salvageNote:
      'Preserve only as a historical web-design / business experiment or move to a dedicated property-business repository.',
  },
  {
    file: 'simulator.html',
    decision: 'MIGRATE TO LABS',
    visibility: 'PUBLIC AFTER HARDENING',
    relevance: 5,
    evidence: 3,
    privacyRisk: 1,
    salvage: 5,
    designFit: 2,
    reason:
      'Contains actual deterministic supply-chain calculations and bottleneck logic. It aligns strongly with Industrial Engineering and Supply Chain, but its simplifying assumptions need to become explicit.',
    salvageNote:
      'Rebuild in the Niyata Operate visual mode, expose every assumption, and separate model state from presentation.',
  },
  {
    file: 'dashboard.html',
    decision: 'RETIRE',
    visibility: 'DO NOT MIGRATE',
    relevance: 3,
    evidence: 1,
    privacyRisk: 1,
    salvage: 1,
    designFit: 1,
    reason:
      'The apparent operational KPIs are randomized on an interval, so the page demonstrates neither a defensible model nor real evidence.',
    salvageNote:
      'No unique product logic worth carrying forward.',
  },
  {
    file: 'meta.html',
    decision: 'RETIRE',
    visibility: 'DO NOT MIGRATE',
    relevance: 1,
    evidence: 1,
    privacyRisk: 1,
    salvage: 1,
    designFit: 1,
    reason:
      'Generic placeholder landing page with YourBrand / generic startup copy. It carries no differentiated Niyata evidence or model.',
    salvageNote:
      'No migration value beyond generic HTML/CSS practice.',
  },
]
