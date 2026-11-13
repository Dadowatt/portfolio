// Fichier principal pour personnaliser ton portfolio.
// Remplace portrait-placeholder.svg par ta photo dans public/images/.
export const profile = {
  name: 'Dado Watt',
  firstName: 'Dado',
  role: 'Développeuse web, web mobile & IA',
  headlineLine1: 'Je conçois des',
  headlineLine2: 'expériences web',
  headlineLine3: 'intelligentes.',
  introduction: 'Je développe des solutions web utiles, de l\'analyse des besoins à la réalisation, en associant développement et intelligence artificielle.',
  about: 'Développeuse web, web mobile et IA, formée à Simplon Sénégal, je conçois des applications qui répondent à des besoins concrets. J\'accorde de l\'importance à la qualité du code, à l\'expérience utilisateur et à la pertinence des fonctionnalités.',
  portraitAccueil: '/images/profil.png',
  portraitAbout: '/images/Dado_Watt.png',
  // Une fois la photo ajoutée dans public/images, indique : '/images/portrait.jpg'
  email: '', // À compléter pour activer le formulaire de contact.
  github: 'https://github.com/Dadowatt',
  linkedin: '', // Optionnel : renseigner ton profil LinkedIn si tu en as un.
  cv: '', // Exemple : '/cv-dado-watt.pdf' après ajout dans public/.
  location: 'Dakar, Sénégal'
};

export interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  extraGithub?: { label: string; url: string }[];
  previewLabel: string;
  previewCategory: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: 'admiguide', name: 'AdmiGuide', category: 'Projet de fin de formation · IA',
    description: 'Assistant intelligent qui déduit la démarche administrative adaptée à une situation décrite avec les mots de l\'utilisateur.',
    technologies: ['Angular', 'Django', 'FastAPI', 'RAG'],
    github: 'https://github.com/AdmiGuide/admiguide-frontend',
    extraGithub: [
      { label: 'Backend', url: 'https://github.com/AdmiGuide/admiguide-backend' },
      { label: 'Service IA', url: 'https://github.com/AdmiGuide/admiguide-ai' }
    ],
    previewLabel: 'AdmiGuide', previewCategory: 'Orientation administrative'
  },
  {
    slug: 'ecostock', name: 'Eco-Stock', category: 'Application web · Gestion',
    description: 'Application de gestion des stocks alimentaires : produits, entrepôts, transferts et tableau de bord.',
    technologies: ['Angular', 'Django REST', 'JWT', 'Chart.js'],
    github: 'https://github.com/Dadowatt/eco-stock-front',
    previewLabel: 'Eco-Stock', previewCategory: 'Gestion de stocks'
  },
  {
    slug: 'smarthelp', name: 'SmartHelp', category: 'Application web · IA',
    description: 'Interface de support client permettant d\'analyser des réclamations par texte, image et voix.',
    technologies: ['Angular', 'FastAPI', 'IA multimodale'],
    github: 'https://github.com/Dadowatt/smarthelp-front',
    previewLabel: 'SmartHelp', previewCategory: 'Support intelligent'
  },
  {
    slug: 'rag', name: 'Assistant RAG', category: 'Backend · Intelligence artificielle',
    description: 'Assistant documentaire qui recherche les passages pertinents d\'un PDF pour répondre aux questions.',
    technologies: ['Django', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/Dadowatt/assistant_RAG_Langchain',
    previewLabel: 'Assistant RAG', previewCategory: 'Questions sur documents'
  },
  {
    slug: 'starbuffet', name: 'Star Buffet', category: 'Application web · Django',
    description: 'Annuaire de traiteurs avec authentification et gestion des prestataires.',
    technologies: ['Python', 'Django', 'HTML', 'CSS'],
    github: 'https://github.com/Dadowatt/starbuffet_project',
    previewLabel: 'Star Buffet', previewCategory: 'Plateforme de traiteurs'
  }
];

export const skills = [
  { short: 'A', name: 'Angular', type: 'frontend' },
  { short: 'TS', name: 'TypeScript', type: 'frontend' },
  { short: 'Py', name: 'Python', type: 'backend' },
  { short: 'Dj', name: 'Django', type: 'backend' },
  { short: 'API', name: 'FastAPI', type: 'backend' },
  { short: 'CSS', name: 'Tailwind CSS', type: 'frontend' },
  { short: 'SQL', name: 'MySQL', type: 'backend' },
  { short: 'Git', name: 'Git / GitHub', type: 'tools' },
  { short: 'D', name: 'Docker', type: 'tools' },
  { short: 'Fg', name: 'Figma', type: 'tools' },
  { short: 'RAG', name: 'RAG / LLM', type: 'ai' },
  { short: 'AI', name: 'IA', type: 'ai' }
];

export const services = [
  { icon: 'web', title: 'Développement web', description: 'Interfaces modernes, responsives et adaptées aux besoins des utilisateurs.' },
  { icon: 'code', title: 'Développement d\'API', description: 'Conception d\'API et intégration de fonctionnalités côté serveur.' },
  { icon: 'ai', title: 'Intégration IA', description: 'Fonctionnalités d\'intelligence artificielle et recherche documentaire RAG.' },
  { icon: 'figma', title: 'Conception UI/UX', description: 'Maquettes et interfaces claires, cohérentes et faciles à utiliser.' }
];

export const timeline = [
  { year: '2026', title: 'Développement web, web mobile & IA', institution: 'Simplon Sénégal', detail: 'Formation certifiante et réalisation d’AdmiGuide.' },
  { year: '2024', title: 'Formation en développement web', institution: '10H TECH', detail: 'Renforcement des compétences en développement.' },
  { year: '2023', title: 'Formation en développement web', institution: 'XARALA', detail: 'Pratique du développement et projets.' },
  { year: '2021', title: 'Formation en développement web', institution: 'HEPO', detail: 'Premières réalisations et apprentissage du développement.' }
];
