# Portfolio Dado — Angular 22 & Tailwind CSS 4

Site portfolio inspiré du design sombre / doré choisi, développé avec Angular (standalone) et Tailwind CSS 4.

## Démarrage sur Windows (PowerShell)

1. Installer **Node.js 22.22.3+ ou 24.15.0+** (requis par Angular 22).
2. Décompresser l'archive puis ouvrir le dossier `portfolio-dado-angular` dans VS Code.
3. Dans le terminal du dossier :

```powershell
npm install
npm start
```

Ouvrir `http://localhost:4200` si le navigateur ne s'ouvre pas automatiquement.

> Ne pas lancer `ng new` : ce ZIP contient déjà le projet Angular. Il contient également la configuration Tailwind CSS 4 : ne pas relancer `ng add tailwindcss`.

## Mettre ta photo

1. Copier ta photo dans `public/images/portrait.jpg`.
2. Ouvrir `src/app/portfolio-data.ts`.
3. Remplacer :

```ts
portrait: '/images/portrait-placeholder.svg',
```

par :

```ts
portrait: '/images/portrait.jpg',
```

Photo affichée automatiquement dans l'accueil et dans « À propos ». Pour un beau rendu, privilégier un portrait vertical de bonne qualité, avec le visage et les épaules visibles.

## Personnaliser

Tout le contenu textuel est regroupé dans `src/app/portfolio-data.ts` : présentation, photo, compétences, services, projets GitHub, parcours et contact.

- **Adresse e-mail :** renseigner `email` pour que le formulaire puisse ouvrir le client mail du visiteur avec un message pré-rempli. Aucune donnée n'est envoyée à un serveur.
- **CV :** déposer `cv-dado-watt.pdf` dans `public/`, puis renseigner `cv: '/cv-dado-watt.pdf'`.
- **LinkedIn :** ajouter l'URL de ton profil dans `linkedin` (facultatif).
- **Images de projets :** actuellement, les visuels sont stylisés et ne sont pas de vraies captures des applications. Nous pourrons ajouter les captures réelles plus tard.

## Fonctionnement des projets

Chaque carte ouvre directement le dépôt Github du projet dans un nouvel onglet. AdmiGuide propose aussi un lien vers le backend et un lien vers le service IA.

## À savoir

- La section Témoignages est retirée.
- Les statistiques fictives et les expériences inventées du template ne sont pas reprises.
- Aucune dépendance à un backend Django n'est nécessaire pour le portfolio.
- Les dépendances ne sont pas incluses dans l'archive : `npm install` les installe sur ton ordinateur.

## Compilation de production

```powershell
npm run build
```

# Portfolio — Dado Watt

Portfolio personnel de **Dado Watt**, développeuse web, web mobile et IA, formée à Simplon Sénégal.

Ce site présente mon parcours, mes compétences techniques et les projets que j'ai réalisés en développement web et en intégration de l'intelligence artificielle.

## Technologies utilisées

- **Frontend :** Angular 22, TypeScript, HTML et CSS
- **Style :** Tailwind CSS 4
- **Icônes :** Lucide Angular
- **Formulaire de contact :** Formspree
- **Hébergement :** Netlify

## Fonctionnalités

- Interface responsive adaptée aux ordinateurs et aux mobiles
- Présentation de mon profil et de mes compétences
- Présentation des services proposés
- Galerie de projets avec liens GitHub et démonstrations
- Accès aux dépôts Frontend, Backend et IA selon les projets
- Téléchargement de mon CV
- Formulaire de contact fonctionnel avec Formspree
- Liens vers mes profils professionnels

## Projets présentés

| Projet | Description |
| --- | --- |
| **AdmiGuide** | Assistant intelligent d'orientation administrative |
| **Eco-Stock** | Application de gestion des stocks alimentaires |
| **SmartHelp** | Application d'analyse intelligente des réclamations |
| **Assistant RAG** | Assistant de questions-réponses sur documents |
| **Sunu-Idées** | Plateforme de partage d'idées avec une version intégrant l'IA |
| **STA System** | Application de suivi et de traçabilité des activités |

Chaque projet dispose d'un lien vers son code source. Des démonstrations sont également disponibles pour plusieurs projets.

## Installation en local

### Prérequis

- Node.js compatible avec Angular 22
- npm
- Git

### 1. Cloner le dépôt

```bash
git clone https://github.com/Dadowatt/portfolio.git
cd portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Démarrer l'application

```bash
npm start
```

L'application est accessible sur :

http://localhost:4200

### 4. Compiler pour la production

```bash
npm run build
```

## Organisation du projet

```text
src/
└── app/
    ├── app.ts              # Logique du composant principal
    ├── app.html            # Interface du portfolio
    ├── app.css             # Styles personnalisés
    └── portfolio-data.ts   # Profil, projets et compétences

public/
├── images/                 # Photos et logos
└── documents/              # CV
```

## Déploiement

Le portfolio est déployé sur **Netlify**.

Le formulaire de contact utilise **Formspree** pour transmettre directement les messages, sans nécessiter de backend dédié.

## Développé par

**Dado Watt**  
Développeuse Web, Web Mobile et IA

- **GitHub :** https://github.com/Dadowatt
- **LinkedIn :** https://www.linkedin.com/in/dado-watt-417971152/
- **E-mail :** dadowatt92@gmail.com
