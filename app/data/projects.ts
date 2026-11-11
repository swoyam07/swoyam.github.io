import type { Project } from '~/types/portfolio'

// Each project gets its own page at /projects/<slug>.
// kind: 'work' (client/company) or 'personal'. featured: shown on the home page.
export const projects: Project[] = [
  {
    slug: 'kavya-school',
    title: 'Kavya School — Website & Admin CMS',
    kind: 'work',
    company: 'Pathway Technologies',
    companyId: 'pathway',
    role: 'Full-stack developer (built the whole project)',
    period: '2025 (this is demo)',
    layer: 'Full-stack',
    featured: true,
    accent: 0,
    summary:
      'A school website with a custom admin panel. Django REST Framework backend and Nuxt 4 frontend, built end to end.',
    overview:
      'A full-stack school website with a custom admin CMS. I built the whole project myself: the backend with Django REST Framework and PostgreSQL, and the frontend with Nuxt 4 and TypeScript. Every page on the public site loads its content from the API and is managed from the admin panel. I used Claude Code as an AI coding assistant during development.',
    groups: [
      {
        title: 'Admin CRUD & APIs',
        items: [
          'Admission form, with PDF generation and email notification',
          'Vacancies and job applications, with CV, cover letter and photo upload',
          'Events and calendar',
          'Gallery tags, albums and images',
          'Board of Directors and Our Team, with tags',
          'Alumni, FAQ, Volunteer Voices, Manjari and Students',
          'Welcome popup with two display slots (swap / replace)',
          'Homepage content blocks: text, images, uploaded video or embedded link',
          'Contact messages and email settings',
        ],
      },
      {
        title: 'Authentication & access',
        items: [
          'JWT login with token refresh',
          'Account activation and password reset by email, change password',
          'Cloudflare Turnstile CAPTCHA on public forms',
          'Role editor: admins choose what each role can view, add, edit or delete',
        ],
      },
      {
        title: 'Backend details',
        items: [
          'Emails and PDFs run in the background with Celery and Redis',
          'Old uploaded files are deleted when a record is deleted or a file is replaced',
          'Migrations and seeder commands for initial data and default roles',
        ],
      },
      {
        title: 'Frontend & setup',
        items: [
          'Public website and full admin dashboard in Nuxt 4 and Tailwind CSS',
          'Server-side rendering (SSR) for SEO',
          'Docker Compose for frontend, backend, PostgreSQL, Redis, Celery and pgAdmin',
        ],
      },
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'ReportLab', 'Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Docker', 'Git', 'Claude Code'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'geokrishi-backend',
    title: 'GeoKrishi — Input Collection Backend',
    kind: 'work',
    company: 'Pathway Technologies',
    companyId: 'pathway',
    role: 'Backend developer',
    period: '2025 (this is demo)',
    layer: 'Backend',
    featured: true,
    accent: 1,
    summary:
      'Report APIs and order and stock features for the Input Collection module of a large Django platform for farmers.',
    overview:
      'GeoKrishi is a large Django platform for farmers and agri-input sales. I worked on the backend of its Input Collection module (orders, inventory and delivery), adding report APIs and order and stock features on top of the existing codebase.',
    groups: [
      {
        title: 'Report APIs (7 endpoints)',
        items: [
          'Order Status Report: order count and amount per day, week, month or year, grouped by status, with an optional item filter',
          'Item Tracking Report: top 10–100 items by completed, returned or placed quantity, with category exclusion',
          'Item Category Report: quantity and amount per category, for a pie chart',
          'Daily Orders Status Report: quantity and amount per item and status over a date range, with search',
          'Daily Orders Status Detail: the orders behind one item and status',
          'Top Customers Report: top 10–25 customers by order value or number of orders',
          'Top Customer Detail: all orders and items for one customer',
        ],
      },
      {
        title: 'Orders & inventory',
        items: [
          'Moved stock deduction from order completion to dispatch, in one shared function (oldest batch first, saved as ledger entries) so stock is not deducted twice',
          'Saved delivery addresses: model, migration and API that store a customer’s Pathao City / Zone / Area by phone number',
          'Optional MRP price on inventory items (migration plus three serializers)',
          'Date-range filters (from / to) on the order list API',
          'Stock quantity in the cart and product serializer, for the storefront’s out-of-stock display',
        ],
      },
      {
        title: 'Access & validation',
        items: ['All report APIs are limited to the admin and manager groups', 'Validation on dates, limits and filters'],
      },
    ],
    tech: ['Python', 'Django', 'DRF', 'Django ORM', 'PostgreSQL', 'Pathao Delivery API', 'Git'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'chronova',
    title: 'Chronova — AI Office Assistant',
    kind: 'personal',
    role: 'Solo project (backend and frontend)',
    period: '2025',
    layer: 'Backend',
    featured: true,
    accent: 4,
    summary:
      'A Django REST Framework workspace for documents, tasks and email, with question answering over uploaded files (RAG) using pgvector and a local LLM.',
    overview:
      'An office assistant that puts document management, task tracking, email, campaigns and Google Calendar in one workspace. The backend is Django REST Framework and the frontend is Next.js. Uploaded documents are split into chunks, embedded and stored in PostgreSQL with pgvector, so users can ask questions about them. A LLaMA 3.2 model runs locally through Ollama.',
    groups: [
      {
        title: 'Document Q&A (RAG)',
        items: [
          'Reads PDF, DOCX, PPTX and text files and splits them into chunks with LangChain',
          'Creates embeddings with Ollama and stores them in PostgreSQL with pgvector',
          'Finds the most relevant chunks with cosine similarity search, then sends them to the LLM to answer',
          'LLaMA 3.2 runs locally through Ollama, so documents never leave the server',
        ],
      },
      {
        title: 'Authentication & permissions',
        items: [
          'OTP-based login, session authentication and SimpleJWT',
          'Custom role system with per-feature permissions: view, create, update, delete and execute',
          'Each company’s users, files, tasks, campaigns and roles are kept separate (multi-tenant)',
        ],
      },
      {
        title: 'Workspace features',
        items: [
          'Document management, task tracking and email campaigns',
          'AI email drafting',
          'Google Calendar connected with OAuth2, with calendar actions from plain-language requests',
          'Company-scoped file storage in MinIO (S3-compatible)',
        ],
      },
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'pgvector', 'LangChain', 'Ollama', 'LLaMA 3.2', 'MinIO', 'SimpleJWT', 'OAuth2', 'Next.js'],
    links: [{ label: 'Source code (this is demo)', href: 'https://github.com/swoyamsuwal/chronova', icon: 'github' }],
  },
  {
    slug: 'input-collection-dashboard',
    title: 'Input Collection — Admin & Manager Dashboard',
    kind: 'work',
    company: 'Pathway Technologies',
    companyId: 'pathway',
    role: 'Frontend developer (reports section)',
    period: '2025 (this is demo)',
    layer: 'Frontend',
    featured: true,
    accent: 2,
    summary:
      'The Vue dashboard for the GeoKrishi report APIs: charts, ranked tables and a shared date-range filter.',
    overview:
      'The Vue dashboard used by admins, managers and sales staff to manage agri-input orders, inventory and delivery. I built a new Reports section that uses the report APIs above, and several order and inventory features.',
    groups: [
      {
        title: 'Reports section',
        items: [
          'Order Item Report: stacked bar charts by day, week, month or year, with a status filter',
          'Item Tracking Report: top-items table, category pie chart and a per-item view',
          'Daily Orders Status Report: searchable, paginated table with a pop-up of the orders behind each row',
          'Top Customers Report: ranked list with a detail page for each customer',
          'One reusable date-range filter with presets (today, week, month, all time, custom)',
        ],
      },
      {
        title: 'Orders & inventory',
        items: [
          'Saved addresses load and fill City, Zone and Area when a 10-digit phone number is entered',
          'MRP input on inventory create, edit and detail views',
          'Order detail page updated for dispatch-time stock deduction',
          'Fixed a bug where the delivery date was converted from Nepali (BS) to English (AD) twice',
          'Report API calls, Pinia store actions and TypeScript interfaces for all new pages',
        ],
      },
    ],
    tech: ['Vue 3', 'TypeScript', 'Quasar', 'Pinia', 'Vue Router', 'ApexCharts', 'Tailwind CSS', 'Axios', 'Vite', 'Git'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'input-collection-ecommerce',
    title: 'Input Collection — Customer Storefront',
    kind: 'work',
    company: 'Pathway Technologies',
    companyId: 'pathway',
    role: 'Contributor (out-of-stock feature)',
    period: '2025 (this is demo)',
    layer: 'Frontend',
    accent: 3,
    summary: 'Out-of-stock display and purchase blocking for an agri-input online store, using a new stock field from the API.',
    overview:
      'The customer-facing online store for agri-input products. I added the out-of-stock display, which uses the stock quantity field I added to the product API in the GeoKrishi backend.',
    groups: [
      {
        title: 'What I built',
        items: [
          'Dimmed overlay with a Nepali “स्टक सकियो” (out of stock) label on product list and detail pages',
          'Quantity selector hidden and add-to-cart disabled for out-of-stock products',
        ],
      },
    ],
    tech: ['Vue 3', 'TypeScript', 'Quasar', 'Tailwind CSS', 'Vite', 'Git'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'vadama',
    title: 'Vadama — Room Rental Platform',
    kind: 'personal',
    role: 'Solo project',
    period: '2024',
    layer: 'Full-stack',
    accent: 5,
    summary: 'A Laravel room rental website with listings, banners, customer accounts and a protected admin panel.',
    overview:
      'A full-stack room rental website built with Laravel and the MVC pattern. Listings, banners and customer accounts are managed through Eloquent models, with an admin panel protected by roles.',
    groups: [
      {
        title: 'What I built',
        items: [
          'CRUD for listings and homepage banners',
          'Customer accounts with Laravel’s built-in authentication',
          'Admin pages protected with middleware and roles',
          'Responsive pages with Blade and Bootstrap',
        ],
      },
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Bootstrap'],
    links: [{ label: 'Source code (this is demo)', href: 'https://github.com/swoyamsuwal/vadama', icon: 'github' }],
  },
  {
    slug: 'apf-nepal',
    title: 'APF Nepal — Official Website Admin',
    kind: 'work',
    company: 'Outlines R&D',
    companyId: 'outlines',
    role: 'Intern / Trainee – PHP developer',
    period: '2024',
    layer: 'Backend',
    accent: 4,
    summary: 'Laravel CRUD modules and APIs for the admin panel of the Armed Police Force Nepal website.',
    overview:
      'The official website of Nepal’s Armed Police Force. I created several CRUD modules and APIs for the admin panel, and used them to turn many static pages into dynamic ones.',
    groups: [
      {
        title: 'CRUD & APIs',
        items: [
          'Ranks',
          'Homepage banner management',
          'Audio / video programs',
          'News and notices',
          'Publications',
          'Gallery albums and images',
          'Media files',
        ],
      },
      { title: 'Result', items: ['Converted many static pages into dynamic pages powered by the new APIs'] },
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'GitLab'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'event-management',
    title: 'Event Management & Ticketing App',
    kind: 'work',
    company: 'Outlines R&D',
    companyId: 'outlines',
    role: 'Intern / Trainee – PHP developer',
    period: '2024',
    layer: 'Full-stack',
    accent: 5,
    summary: 'Hall ticket sales with an admin dashboard, participant management, QR codes and email notifications.',
    overview:
      'A web application for selling and managing event hall tickets. I built the base structure of the project, the admin login and dashboard, and the ticket purchase forms.',
    groups: [
      {
        title: 'Admin panel',
        items: [
          'Login and authentication from the base structure, with password reset by email',
          'Dashboard showing ticket sales, participants, unpaid applicants and other numbers',
          'Participant CRUD with approved, applicant, suspended and deleted states',
          'Export of selected data to Excel',
          'Reminder emails sent with a button',
        ],
      },
      {
        title: 'Tickets & frontend',
        items: [
          'Hall ticket purchase forms',
          'QR codes for payment confirmation',
          'Tickets showing name, QR code and booked hall',
          'Email notifications for purchases and customer actions',
        ],
      },
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'QR codes', 'Excel export', 'Mail'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'saathi-school',
    title: 'Saathi — School Website',
    kind: 'work',
    company: 'Outlines R&D',
    companyId: 'outlines',
    role: 'Intern / Trainee – PHP developer',
    period: '2024',
    layer: 'Backend',
    accent: 0,
    summary: 'Admin CRUD for stories and banners, and contact-message tools like Excel export.',
    overview: 'A website for a school. I built admin CRUD modules and contact-message tools, and made several static pages dynamic.',
    groups: [
      { title: 'Admin CRUD', items: ['Stories', 'Homepage banner management'] },
      {
        title: 'Contact messages',
        items: ['Export selected messages to Excel', 'Copy all stored email addresses from the database'],
      },
      { title: 'Result', items: ['Converted multiple static pages into dynamic ones'] },
    ],
    tech: ['PHP', 'Laravel', 'MySQL'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'siddhartha-cable-car',
    title: 'Siddhartha Cable Car — Website',
    kind: 'work',
    company: 'Outlines R&D',
    companyId: 'outlines',
    role: 'Intern / Trainee – PHP developer',
    period: '2024',
    layer: 'Backend',
    accent: 2,
    summary: 'Image file deletion and edit-page improvements for a cable car service website.',
    overview: 'A website for a cable car service. I worked on file handling and the admin edit pages.',
    groups: [
      {
        title: 'What I built',
        items: ['Deleting uploaded image files together with their database records', 'Extra features on the edit page'],
      },
    ],
    tech: ['PHP', 'Laravel', 'MySQL'],
    links: [],
    note: 'Client project — source code is private.',
  },
  {
    slug: 'nra-nepal',
    title: 'NRA Nepal — Website',
    kind: 'work',
    company: 'Outlines R&D',
    companyId: 'outlines',
    role: 'Intern – PHP developer',
    period: '2024',
    layer: 'Backend',
    accent: 1,
    summary: 'Backend work on a Laravel client website during the internship. (this is demo)',
    overview: 'Describe what the site is and what you built for it. (this is demo)',
    groups: [{ title: 'What I built (this is demo)', items: ['Feature you worked on (this is demo)'] }],
    tech: ['PHP', 'Laravel', 'MySQL'],
    links: [],
    note: 'Client project — source code is private.',
  },
]

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
