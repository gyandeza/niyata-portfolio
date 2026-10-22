export const researchWriting = {
  hero: {
    eyebrow: 'RESEARCH & WRITING',
    title: 'Practice creates questions. Research makes them reusable.',
    copy:
      'This section is the public knowledge layer of Niyata: selected research directions, working notes and professional writing grounded in operations, supply chain, digital transformation and decision systems.',
  },
  statusLegend: [
    { label: 'PUBLISHED', meaning: 'Publicly released and traceable.' },
    { label: 'PRESENTED', meaning: 'Shared in a formal class, forum or professional setting.' },
    { label: 'IN PROGRESS', meaning: 'Active work that is not yet a publication.' },
    { label: 'WORKING NOTE', meaning: 'Structured thinking that may still change.' },
    { label: 'PUBLIC-SAFE', meaning: 'Confidential detail intentionally abstracted.' },
  ],
  researchThemes: [
    {
      id: 'R-01',
      title: 'Supply Chain Decision Intelligence',
      status: 'IN PROGRESS',
      copy:
        'An ongoing research direction exploring how operational signals, uncertainty and decision rules can support transparent supply-chain decisions.',
      boundary:
        'Public description only. Unreleased model details, novelty claims and enterprise data remain outside the portfolio.',
    },
    {
      id: 'R-02',
      title: 'Industrial Engineering for Connected Operations',
      status: 'WORKING NOTE',
      copy:
        'How classical process, flow and systems thinking changes when field operations become digitally connected.',
      boundary:
        'Practice-led theme; no claim of completed academic publication.',
    },
    {
      id: 'R-03',
      title: 'Digital Transformation & Operational Adoption',
      status: 'WORKING NOTE',
      copy:
        'The gap between technical go-live and sustained operating change: ownership, data quality, exception handling and routine.',
      boundary:
        'Drawn from professional reflection; confidential enterprise detail omitted.',
    },
    {
      id: 'R-04',
      title: 'Decision Models, GIS & Regional Intelligence',
      status: 'IN PROGRESS',
      copy:
        'Ongoing applied research and prototype development exploring explainable regional-readiness assessment, GIS context and scenario analysis.',
      boundary:
        'Represented publicly through ILRAS and related methodology notes.',
    },
    {
      id: 'R-05',
      title: 'Applied AI for Operational Work',
      status: 'WORKING NOTE',
      copy:
        'Human-in-the-loop AI, task contracts, approval boundaries and agent architecture for practical operational workflows.',
      boundary:
        'Represented through GILANG AI HQ; no claim of autonomous general intelligence.',
    },
  ],
  writingStreams: [
    {
      code: 'W-01',
      title: 'Research Notes',
      purpose: 'Methods, models, literature synthesis and research development.',
      examples: ['Research framing', 'Method notes', 'Evidence reviews', 'Publication development'],
    },
    {
      code: 'W-02',
      title: 'Practice Notes',
      purpose: 'Lessons from operations, projects and digital transformation.',
      examples: ['Go-live vs change', 'Pilot learning', 'Integration lessons', 'Operational design'],
    },
    {
      code: 'W-03',
      title: 'Professional Writing',
      purpose: 'Short public writing for professional communities.',
      examples: ['LinkedIn essays', 'Research lens posts', 'Project reflections', 'Industry commentary'],
    },
    {
      code: 'W-04',
      title: 'Academic Long-form',
      purpose: 'Future papers, thesis / doctoral outputs and academic-book development.',
      examples: ['Journal manuscripts', 'Conference papers', 'Academic book', 'Teaching chapters'],
    },
  ],
  publicationArchitecture: [
    { stage: '01', title: 'Capture', copy: 'Record the observation, question or evidence while context is fresh.' },
    { stage: '02', title: 'Validate', copy: 'Separate verified evidence from inference, assumption and confidential detail.' },
    { stage: '03', title: 'Develop', copy: 'Choose the right form: note, professional article, paper, case or chapter.' },
    { stage: '04', title: 'Review', copy: 'Check methodological quality, confidentiality and audience fit.' },
    { stage: '05', title: 'Publish', copy: 'Release only when the status and evidence support the claim.' },
    { stage: '06', title: 'Reuse', copy: 'Convert useful knowledge into teaching, speaking and future research.' },
  ],
  firewall: [
    'No unpublished doctoral novelty disclosed',
    'No employer-confidential data or screenshots',
    'No private referee / supervisor communication',
    'No internal vendor or commercial information',
    'No publication status inflated beyond evidence',
  ],
}

export const teachingSpeaking = {
  hero: {
    eyebrow: 'TEACHING & SPEAKING',
    title: 'Connecting Industry Practice with Academic Learning.',
    copy:
      'My teaching experience includes contributions as an online tutor, practitioner lecturer and industry practitioner in higher education, connecting engineering and management concepts with real-world operational challenges.',
  },
  featured: [
    {
      role: 'Online Tutor',
      institution: 'Universitas Terbuka',
      subjects: ['Industrial Relations (Hubungan Industrial)', 'Service Operations Management (Manajemen Operasi Jasa)'],
      note: 'Facilitating online academic discussions, providing assignment feedback and connecting management concepts with practical organizational contexts.',
    },
  ],
  otherInstitutions: [
    'Politeknik Negeri Batam — Practitioner Lecturer',
    'Universitas Trunojoyo Madura (UTM) — Industry Practitioner / Praktisi Mengajar',
    'Universitas Singaperbangsa Karawang (UNSIKA) — Industry Practitioner / Praktisi Mengajar',
  ],
  themes: [
    {
      id: 'T-01',
      title: 'Operations & Industrial Engineering',
      audience: 'Students · early-career professionals',
      copy: 'Process thinking, operations improvement and how industrial-engineering methods appear in real work.',
    },
    {
      id: 'T-02',
      title: 'Supply Chain & Logistics',
      audience: 'Students · professional communities',
      copy: 'Movement, handoffs, visibility, operational risk and decision-making across supply networks.',
    },
    {
      id: 'T-03',
      title: 'Project Management & PMO',
      audience: 'Early-career · project teams',
      copy: 'Project framing, delivery evidence, stakeholder coordination and the gap between plan and operating reality.',
    },
    {
      id: 'T-04',
      title: 'Digital Transformation & Change',
      audience: 'Universities · professional communities',
      copy: 'Why technology deployment is not the same as operating change, and how adoption should be designed.',
    },
    {
      id: 'T-05',
      title: 'Decision Intelligence & Applied AI',
      audience: 'Non-IT audiences · practitioners',
      copy: 'How decision-support systems and AI can augment work without hiding assumptions or removing human authority.',
    },
  ],
  formatPrinciples: [
    'Start with a real case or operating problem.',
    'Use minimal jargon and explain the decision logic.',
    'Separate what the framework says from what practice changes.',
    'Use visuals, process flows and concrete examples.',
    'Close with a reusable tool, question or operating principle.',
  ],
  formats: [
    'Guest lecture',
    'Practitioner class',
    'Professional community session',
    'Workshop / case discussion',
    'Research / project sharing',
  ],
}
