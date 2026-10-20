export const aiHQCaseStudy = {
  eyebrow: 'FLAGSHIP CASE STUDY / HQ-04',
  title: 'GILANG AI HQ',
  subtitle: 'Personal AI Operating System',
  thesis:
    'A modular personal operating system that turns recurring work, research, communication and household workflows into structured AI-assisted tasks with explicit execution, approval and data boundaries.',
  role: [
    'Product owner / system designer',
    'Agent and workflow architecture',
    'Task-contract design',
    'Automation orchestration',
    'Human-approval and data-boundary design',
  ],
  modules: [
    {
      code: 'HQ-PROD',
      title: 'Productivity',
      status: 'Designed',
      copy: 'Structured intake, task routing and reusable agent workflows for day-to-day work.',
      boundary: 'General productivity data',
    },
    {
      code: 'HQ-FIN',
      title: 'Family Finance',
      status: 'Architecture defined',
      copy: 'Shared household finance capture, OCR, budget and query flows with dedicated isolation for credentials and financial data.',
      boundary: 'Sensitive financial data isolated',
    },
    {
      code: 'HQ-MAIL',
      title: 'Gmail Operations',
      status: 'Workflow defined',
      copy: 'Inbox review, cleanup logic, labeling and recurring maintenance with account-specific safety boundaries.',
      boundary: 'Account-scoped mail access',
    },
    {
      code: 'HQ-BRAND',
      title: 'Personal Brand',
      status: 'Designed',
      copy: 'Research, editorial backlog, drafting and publishing support around professional content.',
      boundary: 'Public / professional content',
    },
    {
      code: 'HQ-SOC',
      title: 'Social Intelligence',
      status: 'Designed',
      copy: 'Research, production and performance feedback loops across selected social channels.',
      boundary: 'Platform-specific actions',
    },
    {
      code: 'HQ-BIZ',
      title: 'Business Research',
      status: 'Designed',
      copy: 'Opportunity scanning and structured analysis based on skills, market signals and feasibility.',
      boundary: 'Research / external information',
    },
  ],
  principles: [
    {
      title: 'Contract before execution',
      copy: 'Every task should carry a clear schema: what is being requested, which agent owns it, what data domain it touches, its risk level and whether approval is required.',
    },
    {
      title: 'Shared infrastructure, isolated risk',
      copy: 'Common automation services may be reused, but credentials, personal finance data and account access must remain appropriately separated.',
    },
    {
      title: 'Human approval where consequence matters',
      copy: 'Low-risk automation can proceed automatically; sensitive or consequential actions should require an explicit approval boundary.',
    },
    {
      title: 'Logs are part of the product',
      copy: 'Execution state, run IDs and task status are treated as first-class system objects so automation can be inspected rather than silently trusted.',
    },
  ],
  evidence: [
    {
      label: 'FOUNDATION TEST',
      state: 'Completed',
      copy: 'A structured task contract was passed into a worker flow and returned a completed execution state.',
    },
    {
      label: 'TASK SCHEMA',
      state: 'Implemented',
      copy: 'The foundation schema includes task identity, agent ownership, data domain, risk level, status, timestamps and approval requirement.',
    },
    {
      label: 'VIRTUAL OFFICE',
      state: 'Prototype',
      copy: 'A modular React/Vite interface has been used to represent AI HQ as rooms / modules rather than a single monolithic chatbot.',
    },
    {
      label: 'AUTOMATION LAYER',
      state: 'In development',
      copy: 'n8n is used as the shared orchestration layer for worker flows and future scheduled agents.',
    },
  ],
  notClaimed: [
    'Fully autonomous personal agent',
    'Production-grade security certification',
    'Unattended access to every personal account',
    'General-purpose AGI capability',
    'Measured productivity ROI',
  ],
}
