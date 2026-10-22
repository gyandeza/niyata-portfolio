export const ilrasCaseStudy = {
  eyebrow: 'FLAGSHIP CASE STUDY / IL-02',
  title: 'ILRAS',
  subtitle: 'Regional Intelligence & Decision Support — Working Pilot',
  thesis:
    'A GIS-enabled decision-support pilot designed to make regional-readiness comparisons, scenarios and scoring assumptions transparent.',
  role: [
    'Product concept & problem framing',
    'System and information architecture',
    'Methodology governance',
    'Requirement definition & iterative review',
    'AI-assisted implementation workflow',
  ],
  constraints: [
    'Use verifiable public sources; do not invent data to make a demo look complete.',
    'Keep composite scoring transparent and explainable.',
    'Keep scenario analysis inside the same scoring engine.',
    'Expose known limitations instead of presenting pilot infrastructure as production-ready.',
  ],
  architecture: [
    { step: '01', label: 'PUBLIC DATA', detail: 'BPS · BIG · OSM · BNPB · curated sources' },
    { step: '02', label: 'BACKEND', detail: 'FastAPI · SQLAlchemy · source registry · audit log' },
    { step: '03', label: 'ILRI ENGINE', detail: '7 dimensions · equal-weight baseline · readiness bands' },
    { step: '04', label: 'DECISION APIs', detail: 'Compare · simulate · methodology · recommendations · GIS' },
    { step: '05', label: 'EXPERIENCE', detail: 'React · Leaflet · dashboard · map · district views' },
  ],
  capabilities: [
    {
      no: '01',
      title: 'Readiness dashboard',
      copy: 'District-level scores and readiness bands are displayed from the backend rather than recalculated in the browser.',
    },
    {
      no: '02',
      title: 'Cross-district comparison',
      copy: 'Compares leaders, laggards and the gap to the next readiness band across the pilot districts.',
    },
    {
      no: '03',
      title: 'Scenario simulation',
      copy: 'Any of the seven dimensions can be adjusted in a what-if scenario, then re-enter the same scoring engine used by the base assessment.',
    },
    {
      no: '04',
      title: 'GIS intelligence',
      copy: 'Integrates or explores public GIS sources, with availability and layer behavior subject to runtime verification.',
    },
    {
      no: '05',
      title: 'Methodology transparency',
      copy: 'The seven-dimension equal-weight baseline, citations and limitations are presented transparently; expert-derived weighting, including AHP, remains a future validation pathway.',
    },
    {
      no: '06',
      title: 'Recommendation layer',
      copy: 'SWOT and investment tiers reuse already-justified scores and band gaps instead of introducing a second opaque composite formula.',
    },
  ],
  decisions: [
    {
      title: 'One scoring engine',
      copy: 'Composite ILRI scores and readiness bands live in one backend module. The frontend is display-only for scoring logic.',
    },
    {
      title: 'Transparent baseline before false precision',
      copy: 'Seven dimensions use equal weighting as a defensible baseline while expert-based weighting remains an explicit future research path.',
    },
    {
      title: 'No synthetic authority',
      copy: 'When a trustworthy automated source is unavailable, ILRAS keeps the feature incomplete rather than fabricating a realistic-looking layer or link.',
    },
    {
      title: 'Decision support, not another score',
      copy: 'Investment recommendations and SWOT are derived from existing values and rules, avoiding a second arbitrary scoring scheme.',
    },
  ],
  dimensions: [
    'Connectivity',
    'Accessibility',
    'Infrastructure',
    'Logistics',
    'Industrial Potential',
    'Socio-economic',
    'Risk',
  ],
  limits: [
    'No authentication yet; real sensitive data should not be exposed publicly.',
    'SQLite and the current Render pilot setup do not provide durable production-grade audit persistence.',
    'Third-party GIS calls depend on external services and require runtime verification after deployment.',
    'Equal weighting is an intentional baseline, not the final expert-validated methodology.',
    'Some official boundary queries are schema-verified but still need live runtime verification.',
  ],
  maturityStatement:
    'ILRAS is an evolving decision-support pilot. Its current methodology uses seven readiness dimensions with equal weighting as a transparent baseline. Expert-derived weighting, including a potential AHP approach, remains a future validation pathway. The system is not presented as a government-adopted platform, a validated investment recommendation engine, or production-ready infrastructure. Data coverage, third-party GIS integrations, and persistence capabilities remain subject to documented limitations and further verification.',
  proof:
    'The pilot demonstrates an integrated decision-support workflow and an explainability-first design approach, subject to its documented data, methodology and infrastructure limitations.',
}
