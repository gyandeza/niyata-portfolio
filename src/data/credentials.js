export const credentials = {
  hero: {
    eyebrow: 'CREDENTIALS & PROFESSIONAL INVOLVEMENT',
    title: 'Credentials should reinforce the work—not compete with it.',
    copy:
      'This section groups selected professional credentials, technical capabilities and community involvement by the role they play in my work. The case studies remain the primary evidence.',
  },
  groups: [
    {
      code: 'CR-01',
      title: 'Engineering & Professional Practice',
      purpose: 'Professional engineering identity and applied technical foundation.',
      items: [
        { name: 'Insinyur Profesional Pratama (IPP)', status: 'ACHIEVED', type: 'Professional credential' },
        { name: 'Industrial Engineering', status: 'FOUNDATION', type: 'Academic / professional field' },
        { name: 'Industrial automation / PLC', status: 'PRACTICAL', type: 'Technical capability' },
      ],
    },
    {
      code: 'CR-02',
      title: 'Process Improvement & Analytics',
      purpose: 'Structured improvement, analysis and evidence-based problem solving.',
      items: [
        { name: 'Six Sigma Green Belt', status: 'ACHIEVED', type: 'Improvement credential' },
        { name: 'Power BI · Metabase · Minitab', status: 'PRACTICAL', type: 'Analytics toolkit' },
        { name: 'Python · Excel', status: 'PRACTICAL', type: 'Analysis / prototyping' },
      ],
    },
    {
      code: 'CR-03',
      title: 'Project Delivery',
      purpose: 'Planning, coordination, issue management and project governance.',
      items: [
        { name: 'MS Project', status: 'PRACTICAL', type: 'Planning toolkit' },
        { name: 'Jira · Confluence', status: 'PRACTICAL', type: 'Delivery / collaboration toolkit' },
        { name: 'PMP', status: 'IN PREPARATION', type: 'Credential pathway' },
      ],
    },
    {
      code: 'CR-04',
      title: 'Technical Systems',
      purpose: 'Hands-on familiarity with engineering and digital-system tools.',
      items: [
        { name: 'Mitsubishi PLC FX3U / FX5U', status: 'PRACTICAL', type: 'Automation' },
        { name: 'Kepware / IIoT concepts', status: 'PRACTICAL', type: 'Industrial connectivity' },
        { name: 'AutoCAD · Inventor / Nastran', status: 'PRACTICAL', type: 'Engineering toolkit' },
      ],
    },
  ],
  pathways: [
    {
      title: 'PMP',
      status: 'IN PREPARATION',
      copy: 'Professional project-management credential preparation based on documented project experience and evidence.',
    },
    {
      title: 'IPP → IPM',
      status: 'DEVELOPMENT PATH',
      copy: 'Professional-engineer portfolio development toward the next competency level; not presented as an achieved IPM credential.',
    },
  ],
  organizations: [
    {
      group: 'ENGINEERING',
      name: 'Persatuan Insinyur Indonesia (PII)',
      context: 'Selected regional / branch professional involvement.',
    },
    {
      group: 'INDUSTRIAL ENGINEERING',
      name: 'BKTI — PII',
      context: 'Industrial-engineering professional community involvement.',
    },
    {
      group: 'SYSTEMS ENGINEERING',
      name: 'MSESI',
      context: 'Systems-engineering professional community.',
    },
    {
      group: 'PROJECT MANAGEMENT',
      name: 'PMO Insight',
      context: 'Project / PMO professional community.',
    },
  ],
}

export const collaboration = {
  hero: {
    eyebrow: 'CONTACT & COLLABORATION',
    title: 'The best conversations start with a real problem.',
    copy:
      'I am most useful when the topic sits between operations, systems, projects and decisions. The categories below make it easier to see where a collaboration is likely to fit.',
  },
  lanes: [
    {
      id: 'COL-01',
      title: 'Operations & Digital Transformation',
      prompt: 'How can a real operating workflow become more visible, connected or easier to manage?',
      fit: ['Process / workflow design', 'Field digitalization', 'Integration framing', 'Adoption / change discussion'],
    },
    {
      id: 'COL-02',
      title: 'Supply Chain & Project / PMO',
      prompt: 'How should a cross-functional initiative be structured, piloted or governed?',
      fit: ['Supply-chain initiatives', 'Project development', 'PMO / governance', 'Pilot and rollout review'],
    },
    {
      id: 'COL-03',
      title: 'Research Collaboration',
      prompt: 'Is there a research question at the intersection of industrial engineering, supply chain and decision intelligence?',
      fit: ['Research discussion', 'Academic collaboration', 'Method / evidence review', 'Future publication'],
    },
    {
      id: 'COL-04',
      title: 'Teaching & Speaking',
      prompt: 'Would a practitioner perspective help students or a professional community understand the real operating context?',
      fit: ['Guest lecture', 'Practitioner class', 'Professional session', 'Case discussion'],
    },
    {
      id: 'COL-05',
      title: 'Applied AI & Decision Systems',
      prompt: 'Where can AI or decision support augment work without hiding assumptions or removing human authority?',
      fit: ['Workflow automation', 'Human-in-the-loop design', 'Decision-support prototype', 'Agent architecture discussion'],
    },
  ],
  notFit: [
    'Requests for employer-confidential data, screenshots or internal architecture',
    'Requests to disclose unpublished research novelty or private supervisor communication',
    'Generic mass outreach without a clear collaboration context',
    'Claims or endorsements that cannot be evidenced publicly',
  ],
  channels: [
    {
      name: 'LinkedIn',
      url: 'https://id.linkedin.com/in/gilangyandeza',
      copy: 'Preferred for professional introductions, research and speaking conversations.',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gyandeza',
      copy: 'Best for public project context and selected technical work.',
    },
  ],
}
