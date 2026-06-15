export type EvidenceLink = {
  label: string;
  href: string;
  status: 'placeholder' | 'available';
};

export type CaseStudySection = {
  title: string;
  items: readonly string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  status: string;
  summary: string;
  referenceArchitecture: string;
  capabilities: readonly string[];
  technologies: readonly string[];
  problemStatement: string;
  intendedUsers: readonly string[];
  functionalRequirements: readonly string[];
  nonFunctionalRequirements: readonly string[];
  proposedArchitecture: readonly string[];
  securityConsiderations: readonly string[];
  dataModelOverview: readonly string[];
  cicdApproach: readonly string[];
  monitoringAndObservability: readonly string[];
  testingStrategy: readonly string[];
  costConsiderations: readonly string[];
  currentImplementationStatus: readonly string[];
  knownLimitations: readonly string[];
  plannedNextSteps: readonly string[];
  roadmap: readonly string[];
  evidenceLinks: readonly EvidenceLink[];
};

export type PortfolioCard = {
  title: string;
  status: string;
  problemSolved: string;
  primaryPlatform: string;
  keyTechnologies: readonly string[];
  evidenceLinks: readonly EvidenceLink[];
  caseStudyPath: string;
};

export const livingCvProjectCard: PortfolioCard = {
  title: 'Living CV',
  status: 'Live portfolio foundation and deployment preparation',
  problemSolved:
    'Turns a CV into verifiable engineering evidence: source code, tests, architecture notes, CI/CD and deployment documentation.',
  primaryPlatform: 'Google Cloud Run',
  keyTechnologies: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'Docker',
    'nginx',
    'GitHub Actions',
    'Terraform',
  ],
  evidenceLinks: [
    { label: 'Source code', href: 'https://github.com/Colinchapm/living-cv', status: 'available' },
    { label: 'Architecture overview', href: '/docs/architecture/overview.md', status: 'available' },
    { label: 'Deployment documentation', href: '/docs/deployment/gcp.md', status: 'available' },
  ],
  caseStudyPath: '/',
};

export const marketplacePortfolioCards = [
  {
    title: 'Construction Services Marketplace',
    status: 'Concept portfolio case study',
    problemSolved:
      'Shows how a local trade marketplace could structure job requests, postcode and trade matching, provider trust signals, quote comparison and admin moderation.',
    primaryPlatform: 'Google Cloud Run and Cloud SQL',
    keyTechnologies: [
      'React',
      'TypeScript',
      'Cloud Run',
      'Cloud SQL',
      'Cloud Storage',
      'Terraform',
      'GitHub Actions',
    ],
    evidenceLinks: [
      {
        label: 'Case study',
        href: '/portfolio/construction-services-marketplace',
        status: 'available',
      },
      {
        label: 'Source code',
        href: 'https://github.com/Colinchapm/living-cv',
        status: 'available',
      },
    ],
    caseStudyPath: '/portfolio/construction-services-marketplace',
  },
  {
    title: 'Tattoo Work Marketplace',
    status: 'Concept portfolio case study',
    problemSolved:
      'Shows how a style-led tattoo marketplace could support adult customer discovery, artist portfolios, flash listings, deposits, trust signals and privacy-aware booking.',
    primaryPlatform: 'Google Cloud Run and Firestore',
    keyTechnologies: [
      'React',
      'TypeScript',
      'Cloud Run',
      'Firestore',
      'Cloud Storage',
      'Terraform',
      'GitHub Actions',
    ],
    evidenceLinks: [
      {
        label: 'Case study',
        href: '/portfolio/tattoo-work-marketplace',
        status: 'available',
      },
      {
        label: 'Source code',
        href: 'https://github.com/Colinchapm/living-cv',
        status: 'available',
      },
    ],
    caseStudyPath: '/portfolio/tattoo-work-marketplace',
  },
] as const satisfies readonly PortfolioCard[];

export const portfolioProjects = [
  {
    slug: 'serviceflow-construction',
    title: 'ServiceFlow Construction',
    status: 'Design and prototype development',
    summary:
      'A multi-tenant field-service and property-maintenance platform for builders, plumbers, electricians, gas engineers, surveyors and maintenance companies.',
    referenceArchitecture: 'AWS',
    capabilities: [
      'customer enquiries',
      'quotation requests',
      'property records',
      'appointment scheduling',
      'job allocation',
      'engineer workflows',
      'image and document uploads',
      'estimates',
      'invoicing',
      'audit history',
      'notifications',
      'operational dashboards',
    ],
    technologies: [
      'CloudFront',
      'S3',
      'Cognito',
      'API Gateway',
      'Lambda or ECS',
      'RDS PostgreSQL',
      'CloudWatch',
      'Secrets Manager',
    ],
    problemStatement:
      'Small and medium construction and maintenance teams often coordinate enquiries, quotes, appointments, job notes, photos and invoices across disconnected tools. ServiceFlow explores a single workflow platform that keeps operational records traceable without claiming production use.',
    intendedUsers: [
      'Builders and property-maintenance businesses',
      'Plumbers, electricians, gas engineers and surveyors',
      'Office coordinators and dispatch staff',
      'Field engineers and tradespeople',
      'Property owners, landlords and facilities contacts',
    ],
    functionalRequirements: [
      'Capture enquiries and quotation requests with property and contact details.',
      'Schedule appointments and allocate jobs to engineers or tradespeople.',
      'Upload job images, documents and notes against property and work records.',
      'Generate estimates, invoices and audit history for operational traceability.',
      'Provide dashboards for outstanding work, appointments, job status and follow-up actions.',
    ],
    nonFunctionalRequirements: [
      'Support multi-tenant data separation between businesses.',
      'Protect customer, property and job records with role-based access controls.',
      'Provide resilient storage for documents and images.',
      'Keep core workflows usable on mobile and desktop devices.',
      'Design for observable failures, secure configuration and controlled deployment.',
    ],
    proposedArchitecture: [
      'CloudFront and S3 host the frontend assets.',
      'Cognito handles tenant-aware authentication and user access.',
      'API Gateway exposes application APIs backed by Lambda or ECS services.',
      'RDS PostgreSQL stores tenants, jobs, appointments, invoices and audit records.',
      'S3 document storage keeps images, uploads and job evidence outside the relational database.',
      'CloudWatch and Secrets Manager support observability and secure runtime configuration.',
    ],
    securityConsiderations: [
      'Tenant isolation must be enforced in application logic and database access patterns.',
      'Uploaded images and documents require access control, file-type validation and retention rules.',
      'Secrets should be stored in Secrets Manager rather than source code or environment files.',
      'Audit history should record material changes to jobs, estimates, invoices and appointments.',
    ],
    dataModelOverview: [
      'Tenant, user, role and permission records.',
      'Customer, property and contact records.',
      'Enquiry, quotation, job, appointment and invoice records.',
      'Document, image and audit-event records linked to jobs and properties.',
    ],
    cicdApproach: [
      'GitHub Actions runs linting, type-checking, unit tests and production builds.',
      'Container or serverless deployments should be promoted through reviewed branches.',
      'Infrastructure changes should be planned through Terraform before apply.',
    ],
    monitoringAndObservability: [
      'CloudWatch logs for API and worker failures.',
      'Dashboards for failed uploads, job-processing errors and API latency.',
      'Alerts for authentication failures, backend errors and database health.',
    ],
    testingStrategy: [
      'Unit tests for workflow rendering and validation logic.',
      'Integration tests for tenant-aware API access patterns.',
      'End-to-end tests for enquiry, quote, scheduling and job-update journeys.',
      'Security tests for role boundaries and upload handling.',
    ],
    costConsiderations: [
      'Prefer managed services with low idle cost during prototype development.',
      'Control storage growth through document-retention policies.',
      'Use right-sized database tiers and monitor CloudWatch, transfer and storage costs.',
    ],
    currentImplementationStatus: [
      'Design and prototype development only.',
      'Architecture and requirements are documented for review.',
      'No production customers or production usage are claimed.',
    ],
    knownLimitations: [
      'No live backend is connected from this portfolio page yet.',
      'Payment, accounting and notification integrations are not implemented.',
      'Regulatory and trade-specific requirements require further validation.',
    ],
    plannedNextSteps: [
      'Create a minimal enquiry-to-job prototype.',
      'Define tenant-aware database schema and authorization checks.',
      'Add upload handling and audit-event tests.',
      'Publish a reviewed demonstration deployment when safe to do so.',
    ],
    roadmap: [
      'Requirements and architecture review',
      'Data model prototype',
      'Enquiry and scheduling workflow',
      'Document upload and audit history',
      'Demo deployment with monitoring',
    ],
    evidenceLinks: [
      {
        label: 'Repository placeholder',
        href: '#repository-link-placeholder',
        status: 'placeholder',
      },
      {
        label: 'Live demo placeholder',
        href: '#live-demo-link-placeholder',
        status: 'placeholder',
      },
      {
        label: 'Architecture document',
        href: '/docs/projects/serviceflow-construction.md',
        status: 'available',
      },
    ],
  },
  {
    slug: 'inkmatch-studio',
    title: 'InkMatch Studio',
    status: 'Design and prototype development',
    summary:
      'A tattoo-industry marketplace and studio-management platform connecting customer briefs with suitable artists.',
    referenceArchitecture: 'Microsoft Azure',
    capabilities: [
      'customer briefs',
      'reference-image uploads',
      'artist portfolios',
      'style matching',
      'consultation booking',
      'deposits',
      'consent management',
      'appointment management',
      'studio administration',
      'secure handling of customer information',
    ],
    technologies: [
      'Azure Front Door or Static Web Apps',
      'Entra External ID',
      'Azure Container Apps or App Service',
      'Azure Functions',
      'Azure Database for PostgreSQL',
      'Blob Storage',
      'Key Vault',
      'Azure Monitor',
    ],
    problemStatement:
      'Tattoo customers often struggle to find artists suited to a specific brief, style and availability, while studios need controlled workflows for consultations, deposits, consent and customer information. InkMatch Studio explores that workflow as a prototype, not a live marketplace.',
    intendedUsers: [
      'Customers submitting tattoo briefs',
      'Tattoo artists managing portfolios and consultations',
      'Studio managers coordinating bookings and administration',
      'Reception and support staff handling appointment workflows',
    ],
    functionalRequirements: [
      'Capture customer briefs, reference images, placement notes and style preferences.',
      'Maintain artist portfolios with styles, availability and consultation options.',
      'Match briefs to suitable artists for review rather than automatic final assignment.',
      'Support consultation booking, deposits, consent capture and appointment management.',
      'Provide studio administration views for customer information and workflow status.',
    ],
    nonFunctionalRequirements: [
      'Handle customer information securely and with clear access boundaries.',
      'Protect image uploads and consent records.',
      'Keep matching explainable and reviewable by studio staff.',
      'Support responsive customer and studio workflows.',
      'Design deployment with secrets, monitoring and controlled configuration.',
    ],
    proposedArchitecture: [
      'Azure Front Door or Static Web Apps serves the web experience.',
      'Entra External ID provides customer and studio identity flows.',
      'Azure Container Apps or App Service hosts application APIs.',
      'Azure Functions handles asynchronous jobs such as notifications or image processing.',
      'Azure Database for PostgreSQL stores briefs, bookings, users, consent and studio records.',
      'Blob Storage holds reference images and portfolio media, with Key Vault and Azure Monitor supporting security and operations.',
    ],
    securityConsiderations: [
      'Consent and customer records need strict access controls and audit history.',
      'Reference images should use private storage with scoped access.',
      'Deposits require a compliant payment provider before any real transaction handling.',
      'AI-assisted matching must remain explainable and subject to human review.',
    ],
    dataModelOverview: [
      'Customer, artist, studio and staff records.',
      'Brief, style, portfolio, consultation and appointment records.',
      'Consent, deposit-status, media and audit-event records.',
    ],
    cicdApproach: [
      'GitHub Actions validates code before merge.',
      'Container images or app packages can be promoted to Azure-hosted environments.',
      'Infrastructure definitions should keep identity, storage, database and secrets reproducible.',
    ],
    monitoringAndObservability: [
      'Azure Monitor tracks API errors, booking failures and upload issues.',
      'Application logs should include correlation IDs without exposing sensitive customer data.',
      'Alerts should focus on failed booking, consent and notification paths.',
    ],
    testingStrategy: [
      'Unit tests for brief capture, validation and matching display logic.',
      'End-to-end tests for brief submission and consultation booking.',
      'Security tests for customer/studio role boundaries.',
      'Upload tests for file size, type and access control.',
    ],
    costConsiderations: [
      'Prototype services should use low-cost Azure tiers where practical.',
      'Blob lifecycle rules can control media-storage cost.',
      'Monitor app hosting, database and outbound bandwidth before scaling.',
    ],
    currentImplementationStatus: [
      'Design and prototype development only.',
      'No live marketplace or production studio adoption is claimed.',
      'Consent, deposits and matching require further validation before real use.',
    ],
    knownLimitations: [
      'No payment provider is integrated.',
      'Matching logic is conceptual and must be human-reviewed.',
      'Legal wording for consent and data retention is not final.',
    ],
    plannedNextSteps: [
      'Prototype brief submission and artist portfolio views.',
      'Define consent and appointment data models.',
      'Add secure media upload proof of concept.',
      'Document privacy and retention assumptions.',
    ],
    roadmap: [
      'Brief and portfolio data model',
      'Studio administration prototype',
      'Secure media upload',
      'Consultation workflow',
      'Reviewable style-matching demonstration',
    ],
    evidenceLinks: [
      {
        label: 'Repository placeholder',
        href: '#repository-link-placeholder',
        status: 'placeholder',
      },
      {
        label: 'Live demo placeholder',
        href: '#live-demo-link-placeholder',
        status: 'placeholder',
      },
      {
        label: 'Architecture document',
        href: '/docs/projects/inkmatch-studio.md',
        status: 'available',
      },
    ],
  },
  {
    slug: 'pegasus-engineering-platform',
    title: 'Pegasus Engineering Platform',
    status: 'Concept architecture and secure-system demonstration',
    summary:
      'A secure engineering, supplier, procurement and asset-lifecycle management platform for advanced manufacturing and aerospace-style environments.',
    referenceArchitecture: 'Google Cloud Platform',
    capabilities: [
      'supplier onboarding',
      'project records',
      'requirements management',
      'document control',
      'component tracking',
      'procurement workflows',
      'inspection records',
      'maintenance schedules',
      'approvals',
      'audit trails',
      'role-based access',
      'data classification',
    ],
    technologies: [
      'Cloud Run',
      'Identity Platform',
      'Cloud SQL PostgreSQL',
      'Cloud Storage',
      'Secret Manager',
      'Cloud Logging',
      'Cloud Monitoring',
      'Artifact Registry',
      'Cloud Build or GitHub Actions',
    ],
    problemStatement:
      'Engineering and manufacturing teams need controlled systems for suppliers, requirements, documents, components, procurement and inspection history. Pegasus is a secure-system concept and demonstration architecture for lifecycle management, without operational weapons guidance, classified material, export-controlled details or invented government relationships.',
    intendedUsers: [
      'Engineering administrators',
      'Supplier-management teams',
      'Procurement and inspection staff',
      'Project managers and technical reviewers',
      'Maintenance and asset-lifecycle teams',
    ],
    functionalRequirements: [
      'Onboard suppliers and maintain project, requirement and component records.',
      'Control document versions and approvals.',
      'Track procurement, inspection and maintenance workflows.',
      'Apply role-based access and data-classification labels.',
      'Maintain audit trails for sensitive record changes.',
    ],
    nonFunctionalRequirements: [
      'Apply least-privilege access and strong auditability.',
      'Separate sensitive records by role, project and classification.',
      'Protect documents and secrets with managed cloud controls.',
      'Design for reliable deployment, monitoring and incident investigation.',
      'Avoid storing classified, export-controlled or operationally sensitive material in the demonstration.',
    ],
    proposedArchitecture: [
      'Cloud Run hosts containerized application services.',
      'Identity Platform manages authentication and role-aware access flows.',
      'Cloud SQL PostgreSQL stores projects, suppliers, requirements, components and workflow records.',
      'Cloud Storage holds controlled documents with metadata and access checks.',
      'Secret Manager stores runtime secrets, while Cloud Logging and Cloud Monitoring support operations.',
      'Artifact Registry and Cloud Build or GitHub Actions support build and deployment pipelines.',
    ],
    securityConsiderations: [
      'The demo must not contain classified, export-controlled or operationally sensitive content.',
      'Role-based access and data classification must be central to the model.',
      'Document access should be logged, scoped and reviewable.',
      'Administrative actions require audit events and least-privilege permissions.',
    ],
    dataModelOverview: [
      'Organisation, user, role and project records.',
      'Supplier, requirement, document, component and procurement records.',
      'Inspection, maintenance, approval, classification and audit-event records.',
    ],
    cicdApproach: [
      'GitHub Actions or Cloud Build validates and builds container images.',
      'Artifact Registry stores immutable images for deployment.',
      'Terraform should manage service accounts, IAM, Cloud Run, Cloud SQL and storage resources.',
    ],
    monitoringAndObservability: [
      'Cloud Logging captures application and access events.',
      'Cloud Monitoring tracks service health, latency and error rates.',
      'Alerts should cover failed approvals, storage access errors and backend failures.',
    ],
    testingStrategy: [
      'Unit tests for classification, access-control and workflow rendering logic.',
      'Integration tests for role boundaries and audit-event creation.',
      'End-to-end tests for supplier onboarding, document control and approval workflows.',
      'Security review to confirm no prohibited content or unsafe operational guidance is present.',
    ],
    costConsiderations: [
      'Cloud Run can scale to zero for demonstration workloads.',
      'Cloud SQL cost should be controlled with small instances during prototype work.',
      'Storage retention and logging volume need explicit limits.',
    ],
    currentImplementationStatus: [
      'Concept architecture and secure-system demonstration.',
      'No production deployment, customer adoption or government relationship is claimed.',
      'Safety boundaries exclude operational weapons guidance, classified material and export-controlled detail.',
    ],
    knownLimitations: [
      'No live secure backend is connected yet.',
      'Data-classification policy requires formal review before real use.',
      'Procurement and compliance workflows are conceptual only.',
    ],
    plannedNextSteps: [
      'Build a safe synthetic data model for suppliers, requirements and document control.',
      'Prototype role-based access and audit-event generation.',
      'Document threat model and classification assumptions.',
      'Create a Cloud Run demonstration with non-sensitive sample data.',
    ],
    roadmap: [
      'Safe synthetic data model',
      'Role and classification prototype',
      'Document-control workflow',
      'Audit trail and monitoring',
      'Cloud Run demonstration deployment',
    ],
    evidenceLinks: [
      {
        label: 'Repository placeholder',
        href: '#repository-link-placeholder',
        status: 'placeholder',
      },
      {
        label: 'Live demo placeholder',
        href: '#live-demo-link-placeholder',
        status: 'placeholder',
      },
      {
        label: 'Architecture document',
        href: '/docs/projects/pegasus-engineering-platform.md',
        status: 'available',
      },
    ],
  },
] as const satisfies readonly PortfolioProject[];

export const portfolioCards = [
  livingCvProjectCard,
  ...marketplacePortfolioCards,
  ...portfolioProjects.map((project) => ({
    title: project.title,
    status: project.status,
    problemSolved: project.problemStatement,
    primaryPlatform: project.referenceArchitecture,
    keyTechnologies: project.technologies.slice(0, 6),
    evidenceLinks: project.evidenceLinks,
    caseStudyPath: `/projects/${project.slug}`,
  })),
] as const satisfies readonly PortfolioCard[];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
