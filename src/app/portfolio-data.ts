
export const profile = {
  name: 'Dado Watt',
  firstName: 'Dado',
  role: 'Développeuse web, web mobile & IA',
  headlineLine1: 'Je conçois des',
  headlineLine2: 'applications web',
  headlineLine3: 'intelligentes.',
  introduction: 'Je développe des solutions web utiles, de l\'analyse des besoins à la réalisation, en associant développement et intelligence artificielle.',
  about: 'Développeuse web, web mobile et IA, formée à Simplon Sénégal, je conçois des applications qui répondent à des besoins concrets. J\'accorde de l\'importance à la qualité du code, à l\'expérience utilisateur et à la pertinence des fonctionnalités.',
  portraitAccueil: '/images/profil.png',
  portraitAbout: '/images/Dado_Watt.png',
  email: 'dadowatt92@gmail.com', // À compléter pour activer le formulaire de contact.
  github: 'https://github.com/Dadowatt',
  linkedin: 'https://www.linkedin.com/in/dado-watt-417971152/',
  cv: '/documents/CV-Dado-Watt.pdf',
  location: 'Dakar, Sénégal'
};

export interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  github: string;
  githubLabel?: string;
  extraGithub?: { label: string; url: string }[];
  demo?: string;
  demoLabel?: string;
  previewLabel: string;
  previewCategory: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: 'admiguide',
    name: 'AdmiGuide',
    image: '/images/projects/admiguide.png',
    category: 'Projet de fin de formation · IA',
    description: 'Assistant intelligent qui déduit la démarche administrative adaptée à une situation décrite avec les mots de l\'utilisateur.',
    technologies: ['Angular', 'Django', 'FastAPI', 'RAG'],
    github: 'https://github.com/AdmiGuide/admiguide-frontend',
    githubLabel: 'Frontend',
    extraGithub: [
      {
        label: 'Backend',
        url: 'https://github.com/AdmiGuide/admiguide-backend'
      },
      {
        label: 'Service IA',
        url: 'https://github.com/AdmiGuide/admiguide-ai'
      }
    ],
    demo: 'https://drive.google.com/file/d/1ngGhHlRODHPNHfGPMGMzn9VSTogcbUAR/view',
    demoLabel: 'Voir la démo',
    previewLabel: 'AdmiGuide',
    previewCategory: 'Orientation administrative'
  },
  {
    slug: 'ecostock',
    name: 'Eco-Stock',
    category: 'Application web · Gestion',
    description: 'Application de gestion des stocks alimentaires : produits, entrepôts, transferts et tableau de bord.',
    technologies: ['Angular', 'Django REST', 'JWT', 'Chart.js'],
    github: 'https://github.com/Dadowatt/eco-stock-front',
    githubLabel: 'Frontend',
    extraGithub: [
      {
        label: 'Backend',
        url: 'https://github.com/Dadowatt/eco-stock-api-backend'
      }
    ],
    demo: 'https://drive.google.com/file/d/1BFEnRpyjj1GadxFvP5D4WUjEQvDBPxMp/view',
    demoLabel: 'Voir la démo',
    previewLabel: 'Eco-Stock',
    previewCategory: 'Gestion de stocks'
  },
  {
    slug: 'smarthelp',
    name: 'SmartHelp',
    category: 'Application web · IA',
    description: 'Interface de support client permettant d\'analyser des réclamations par texte, image et voix.',
    technologies: ['Angular', 'FastAPI', 'IA multimodale'],
    github: 'https://github.com/Dadowatt/smarthelp-front',
    githubLabel: 'Frontend',
    extraGithub: [
      {
        label: 'Backend & IA',
        url: 'https://github.com/Dadowatt/smarthelp-support-api'
      }
    ],
    demo: 'https://drive.google.com/file/d/10CGb4hEu5BzzsSXh1Ud4T-K0D0STuZnl/view',
    demoLabel: 'Voir la démo',
    previewLabel: 'SmartHelp',
    previewCategory: 'Support intelligent'
  },
  {
    slug: 'rag',
    name: 'Assistant RAG',
    category: 'Backend · Intelligence artificielle',
    description: 'Assistant documentaire qui recherche les passages pertinents d\'un PDF pour répondre aux questions.',
    technologies: ['Django', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/Dadowatt/assistant_RAG_Langchain',
    githubLabel: 'Code source',
    previewLabel: 'Assistant RAG',
    previewCategory: 'Questions sur documents'
  },
  {
    slug: 'sunuidees',
    name: 'Sunu-Idées',
    category: 'Application web · IA',
    description: 'Plateforme de partage anonyme d\'idées avec classification automatique par IA et gestion interactive des publications.',
    technologies: ['JavaScript', 'Vite', 'Supabase', 'OpenRouter'],
    github: 'https://github.com/Dadowatt/sunu-idee_refactoring_vite',
    githubLabel: 'Code V2 · IA',
    demo: 'https://sunuidees.netlify.app/',
    demoLabel: 'Voir la démo (V1 sans IA)',
    previewLabel: 'Sunu-Idées',
    previewCategory: 'Partage d\'idées'
  },
  {
    slug: 'sta',
    name: 'STA — Traçabilité d\'Activité',
    category: 'Application web · Gestion',
    description: 'Application web permettant de centraliser et suivre les activités d\'une équipe de développement avec recherche, filtrage et gestion des accès.',
    technologies: ['Python', 'Django', 'MySQL', 'Bootstrap 5'],
    github: 'https://github.com/Dadowatt/STA_system',
    githubLabel: 'Code source',
    demo: 'https://drive.google.com/file/d/1jMohN4irMmKfoHdXh4gqkJiSd796pUqV/view',
    demoLabel: 'Voir la démo',
    previewLabel: 'STA System',
    previewCategory: 'Suivi des activités'
  }
];

export const skills = [
  { short: 'A', name: 'Angular', type: 'frontend', image: '/images/skills/angular.png' },
  { short: 'TS', name: 'TypeScript', type: 'frontend', image: '/images/skills/typescript.png' },
  { short: 'Py', name: 'Python', type: 'backend', image: '/images/skills/python.png' },
  { short: 'Dj', name: 'Django', type: 'backend', image: '/images/skills/django.png' },
  { short: 'API', name: 'FastAPI', type: 'backend', image: '/images/skills/fastapi.png' },
  { short: 'CSS', name: 'Tailwind CSS', type: 'frontend', image: '/images/skills/tailwind.png' },
  { short: 'SQL', name: 'SQL', type: 'backend', image: '/images/skills/sql.png' },
  { short: 'Git', name: 'Git / GitHub', type: 'tools', image: '/images/skills/git.png' },
  { short: 'D', name: 'Docker', type: 'tools', image: '/images/skills/docker.png' },
  { short: 'Fg', name: 'Figma', type: 'tools', image: '/images/skills/figma.png' },
  { short: 'L', name: 'Laravel', type: 'backend', image: '/images/skills/laravel.png' },
  { short: 'N', name: 'Node.js', type: 'backend', image: '/images/skills/nodejs.png' },
  { short: 'JS', name: 'JavaScript', type: 'frontend', image: '/images/skills/javascript.png' },
  { short: 'HTML', name: 'HTML', type: 'frontend', image: '/images/skills/html.png' },
  { short: 'CSS', name: 'CSS', type: 'frontend', image: '/images/skills/css.png' }
];

export const services = [
  { icon: 'web', title: 'Développement web', description: 'Interfaces modernes, responsives et adaptées aux besoins des utilisateurs.' },
  { icon: 'code', title: 'Développement d\'API', description: 'Conception d\'API et intégration de fonctionnalités côté serveur.' },
  { icon: 'ai', title: 'Intégration IA', description: 'Fonctionnalités d\'intelligence artificielle et recherche documentaire RAG.' },
  { icon: 'figma', title: 'Conception UI/UX', description: 'Maquettes et interfaces claires, cohérentes et faciles à utiliser.' }
];

export const timeline = [
  { year: '2026', title: 'Développement web, web mobile & IA', institution: 'Simplon Sénégal', detail: 'Formation certifiante et réalisation d’AdmiGuide.' },
  { year: '2024', title: 'Formation en dev web Full-Stack', institution: '10H TECH', detail: 'Renforcement des compétences en développement.' },
  { year: '2023', title: 'Formation en Full-Stack Javascript', institution: 'XARALA', detail: 'Pratique du développement et projets.' },
  { year: '2021', title: 'Formation en développement web', institution: 'HEPO', detail: 'Premières réalisations et apprentissage du développement.' }
];
