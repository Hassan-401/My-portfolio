// ============================================================
//  EDIT THIS FILE to change any content on the site.
//  Links, skills, and projects below are placeholders —
//  replace them with your real ones.
// ============================================================

export const profile = {
  name: "Hassan Mohamed",
  initials: "HM",
  role: "SOFTWARE ENGINEER",
  tagline: "Clean Architect",
  bio: "Software Engineer focused on crafting dependable server-side platforms and polished, responsive user interfaces.",
  resumeUrl: "#", // link to your resume PDF
  socials: [
    {
      label: "Email",
      icon: "mail",
      color: "#ea4335",
      url: "mailto:hassanmohamedd401@gmail.com",
    },
    {
      label: "GitHub",
      icon: "github",
      color: "#f0f6fc",
      url: "https://github.com/Hassan-401",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      color: "#0a66c2",
      url: "https://www.linkedin.com/in/hassan-401-",
    },
    {
      label: "Facebook",
      icon: "facebook",
      color: "#1877f2",
      url: "https://www.facebook.com/hassan.m.401/",
    },
    {
      label: "Instagram",
      icon: "instagram",
      color: "#e4405f",
      url: "https://www.instagram.com/hassan_401__",
    },
    {
      label: "WhatsApp",
      icon: "whatsapp",
      color: "#25d366",
      url: "https://wa.me/201154649393",
    },
    {
      label: "Telegram",
      icon: "telegram",
      color: "#26a5e4",
      url: "https://t.me/hassann401",
    },
    {
      label: "X / Twitter",
      icon: "x",
      color: "#e6edf5",
      url: "https://x.com/hassan_401_",
    },
  ],
};

export const education = {
  degree: "Bachelor of Computer Science & Information Systems",
  school: "Sinai University",
  location: "Ismailia, Egypt",
  period: "OCT 2022 – JUL 2026", // adjust to your real dates
  note: "My Academic Journey",
};

// Short intro shown under the "ABOUT ME" title.
export const aboutIntro =
  "Computer Science graduate passionate about building scalable systems, solving complex problems, and crafting reliable digital experiences.";

// Vertical timeline shown next to the profile photo in the About section.
export const aboutTimeline = [
  {
    label: "Education",
    icon: "cap",
    color: "#2dd4bf",
    title: "Bachelor of Computer Science & Information Systems",
    meta: "Sinai University",
    location: "Ismailia, Egypt",
    tag: "OCT 2022 – JUL 2026",
  },
  {
    label: "Experience",
    icon: "briefcase",
    color: "#38bdf8",
    title: "Freelance Full-Stack Developer",
    text: "Building modern, responsive web applications and AI-powered solutions for clients worldwide.",
  },
  {
    label: "Interests",
    icon: "heart",
    color: "#8b5cf6",
    text: "AI • Backend Development • System Design • Clean Architecture",
  },
];

export const about = [
  {
    icon: "layers",
    title: "Full-Stack & Systems",
    text: "An engineer at home across every layer of the stack, building solid server architectures and fast, refined interfaces made to handle serious growth.",
  },
  {
    icon: "cpu",
    title: "Algorithms & Problem Solving",
    text: "A passionate problem solver who applies strong data structures and algorithms knowledge to design efficient answers to demanding, high-load technical puzzles.",
  },
  {
    icon: "code",
    title: "System Design & Code Quality",
    text: "Connecting dependable back-end foundations with elegant front-end experiences, guided by modern engineering practices to ship resilient, complete digital products.",
  },
];

export const skills = [
  {
    category: "Core Languages",
    accent: "#3178c6",
    items: [
      "Python",
      "PHP",
      "JavaScript (ES6+)",
      "C++",
      "TypeScript",
      "SQL",
      "Go",
      "Java",
      "HTML5",
      "C",
      "Dart",
      "CSS3",
    ],
  },
  {
    category: "Backend Engineering",
    accent: "#8cc84b",
    items: [
      "RESTful API Design",
      "Node.js",
      "JWT Authentication",
      "Express.js",
      "System Architecture",
      "RabbitMQ",
      "Real-time Systems (Socket.IO)",
      "NestJS",
    ],
  },
  {
    category: "Databases & Storage",
    accent: "#00ed64",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "MySQL",
      "SQLite",
      "Database Design & Optimization",
    ],
  },
  {
    category: "DevOps & Cloud",
    accent: "#f59e0b",
    items: ["Docker", "GitHub Actions", "Linux", "Kubernetes", "AWS", "Nginx"],
  },
  {
    category: "Frontend Development",
    accent: "#61dafb",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vue.js",
      "Redux Toolkit",
      "Semantic UI",
      "Framer Motion",
      "Responsive Web Design",
      "Sass",
      "State Management",
      "Bootstrap",
    ],
  },
  {
    category: "Core CS & Engineering",
    accent: "#f43f5e",
    items: [
      "Data Structures & Algorithms",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Design Patterns",
      "System Design",
    ],
  },
  {
    category: "Software Methodologies",
    accent: "#a855f7",
    items: ["Agile / Scrum", "Code Review", "Clean Code & SOLID", "Pair Programming", "TDD / BDD"],
  },
  {
    category: "Development Tools",
    accent: "#2dd4bf",
    items: ["GitHub", "Figma", "Git", "Vite", "Postman", "GitLab", "Vercel", "Jira"],
  },
];

// How many project cards appear on each pagination page.
export const PROJECTS_PER_PAGE = 6;

export const projects = [
  {
    title: "NexusCart — Multi-Vendor Marketplace",
    description:
      "A full-scale marketplace where thousands of independent sellers run their own storefronts, inventory, and payouts under one roof.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Stripe Connect", "Docker"],
    highlight:
      "Engineered vendor onboarding, split payments with escrow, commission settlement, and a faceted product search that stays fast across a million-item catalog.",
    github: "https://github.com/Hassan-401/nexuscart",
    demo: "#",
  },
  {
    title: "MediCore — Hospital Management System",
    description:
      "An end-to-end hospital platform covering electronic health records, appointments, pharmacy stock, labs, and billing.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Prisma ORM", "Socket.IO", "AWS"],
    highlight:
      "Modeled a strict role-based permission system across doctors, nurses, pharmacists, and admins, with a full audit trail on every patient record touched.",
    github: "https://github.com/Hassan-401/medicore",
    demo: "#",
  },
  {
    title: "EduVerse — Learning Management Platform",
    description:
      "A university-grade LMS with course authoring, live virtual classrooms, proctored exams, and certification tracks.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "WebRTC", "Tailwind CSS"],
    highlight:
      "Built live classrooms on WebRTC with recording and replay, plus an adaptive quiz engine that scores submissions and issues verifiable certificates.",
    github: "https://github.com/Hassan-401/eduverse",
    demo: "#",
  },
  {
    title: "FinLedger — Banking & Payments Engine",
    description:
      "A double-entry ledger core that powers accounts, transfers, cards, and statements with strict financial correctness.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "RabbitMQ", "Redis", "Docker"],
    highlight:
      "Guaranteed balance integrity with idempotent, transactional money movement and an append-only ledger that reconciles every posting to the cent.",
    github: "https://github.com/Hassan-401/finledger",
    demo: "#",
  },
  {
    title: "LogiTrack — Fleet & Logistics Platform",
    description:
      "A logistics control tower for live vehicle tracking, route planning, driver assignment, and delivery proof.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Socket.IO", "Redis", "Mapbox"],
    highlight:
      "Streamed thousands of GPS pings per second into a live dispatch map and cut planned mileage with a route-optimization service for multi-stop runs.",
    github: "https://github.com/Hassan-401/logitrack",
    demo: "#",
  },
  {
    title: "TalentForge — Job Board & ATS",
    description:
      "A recruitment platform pairing a public job board with a full applicant tracking system for hiring teams.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Elasticsearch", "Redis", "AWS S3"],
    highlight:
      "Parsed and indexed resumes for semantic matching, then drove candidates through customizable hiring pipelines with interview scheduling and scorecards.",
    github: "https://github.com/Hassan-401/talentforge",
    demo: "#",
  },
  {
    title: "StreamHive — Video Streaming Platform",
    description:
      "A video-on-demand service with adaptive streaming, subscriptions, watch history, and personalized recommendations.",
    tech: ["Next.js", "Node.js", "FFmpeg", "MongoDB", "Redis", "AWS CloudFront"],
    highlight:
      "Built an asynchronous transcoding pipeline that renders multi-bitrate HLS renditions and serves them through a CDN for smooth playback on any connection.",
    github: "https://github.com/Hassan-401/streamhive",
    demo: "#",
  },
  {
    title: "CloudDesk — Multi-Tenant SaaS Helpdesk",
    description:
      "A customer support suite with shared inboxes, SLA policies, automations, and a self-service knowledge base.",
    tech: ["React.js", "NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Kubernetes"],
    highlight:
      "Designed tenant-isolated data access so every workspace stays sealed off, with SLA timers and escalation rules running on a background job queue.",
    github: "https://github.com/Hassan-401/clouddesk",
    demo: "#",
  },
  {
    title: "PropVista — Real Estate Marketplace",
    description:
      "A property portal with rich listings, immersive virtual tours, mortgage tooling, and agent CRM.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Elasticsearch", "Mapbox", "Redis"],
    highlight:
      "Combined geospatial map search with saved-search alerts, and delivered 360° virtual tours alongside a mortgage affordability calculator.",
    github: "https://github.com/Hassan-401/propvista",
    demo: "#",
  },
  {
    title: "SocialSphere — Social Networking Platform",
    description:
      "A social network with algorithmic feeds, stories, real-time messaging, and community moderation.",
    tech: ["React.js", "Node.js", "MongoDB", "Redis", "Socket.IO", "AWS S3"],
    highlight:
      "Built a fan-out feed service backed by Redis caching and a real-time messaging layer with presence, typing indicators, and read receipts.",
    github: "https://github.com/Hassan-401/socialsphere",
    demo: "#",
  },
  {
    title: "AI Insight Studio — Document Intelligence",
    description:
      "An AI workspace that ingests large document sets and answers questions over them with cited sources.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "pgvector", "Claude API"],
    highlight:
      "Implemented a retrieval-augmented pipeline that chunks and embeds documents, then grounds every generated answer in traceable source citations.",
    github: "https://github.com/Hassan-401/ai-insight-studio",
    demo: "#",
  },
  {
    title: "RestoChain — Restaurant & Delivery Network",
    description:
      "A multi-branch restaurant system spanning online ordering, POS, kitchen displays, and courier dispatch.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Socket.IO", "Redis", "Docker"],
    highlight:
      "Synchronized live order state from checkout to kitchen screen to courier handoff, keeping every branch's menu and stock consistent in real time.",
    github: "https://github.com/Hassan-401/restochain",
    demo: "#",
  },
  {
    title: "CyberGuard — Security Monitoring Dashboard",
    description:
      "A SIEM-style platform that ingests infrastructure logs and surfaces threats through live dashboards and alerting.",
    tech: ["React.js", "Node.js", "Elasticsearch", "RabbitMQ", "Redis", "Docker"],
    highlight:
      "Streamed high-volume log events through a queue-backed ingestion pipeline with rule-based anomaly detection and on-call alert routing.",
    github: "https://github.com/Hassan-401/cyberguard",
    demo: "#",
  },
  {
    title: "EventPulse — Event & Ticketing Platform",
    description:
      "A large-venue ticketing system with interactive seat maps, tiered pricing, QR entry, and organizer analytics.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Stripe"],
    highlight:
      "Survived flash-sale traffic using distributed seat locking and queued checkout, so no seat is ever double-sold under heavy concurrency.",
    github: "https://github.com/Hassan-401/eventpulse",
    demo: "#",
  },
  {
    title: "DevPipeline — CI/CD Orchestration Platform",
    description:
      "A self-hosted delivery platform that runs build pipelines, containerizes services, and ships them to clusters.",
    tech: ["React.js", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    highlight:
      "Orchestrated isolated container builds with parallel job execution, streaming live logs to the browser and rolling deployments out to Kubernetes.",
    github: "https://github.com/Hassan-401/devpipeline",
    demo: "#",
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "C1 – Advanced", percent: 92 },
];
