# Portfolio Dado — Angular 22 & Tailwind CSS 4

Portfolio personnel de Dado Watt, développeuse web, web mobile et IA.

## Installation

Prérequis : Node.js 22.22.3+ ou 24.15.0+ et npm.

```powershell
npm ci
npm start
```

Ouvrir http://localhost:4200/ ou l'adresse affichée.

Pour vérifier le build de production :

```powershell
npm run build
```

## Personnalisation

Le contenu du site est regroupé dans `src/app/portfolio-data.ts`.

- **Photo d'accueil :** `public/images/profil.png` (`profile.portraitAccueil`).
- **Photo À propos :** `public/images/Dado_Watt.png` (`profile.portraitAbout`).
- **Logos techniques :** `public/images/skills/`.
- **CV :** `public/documents/CV-Dado-Watt.pdf` (`profile.cv`).
- **GitHub, LinkedIn et e-mail :** paramètres dans l'objet `profile`.
- **Projets :** tableau `projects`, chaque carte ouvre son dépôt GitHub.

Les aperçus des projets sont des maquettes CSS provisoires : ils ne correspondent pas à des captures réelles.

## Formulaire de contact

Le formulaire ouvre le logiciel de messagerie du visiteur via `mailto:` : il n'envoie pas directement de message et ne nécessite aucun backend.

## Mise en ligne

Exécuter `npm run build`, puis publier le contenu du dossier `dist/portfolio-dado/browser` si la configuration Angular le génère à cet emplacement. Vérifier la présence de `index.html` dans le dossier publié.

La règle de redirection Netlify est définie dans `netlify.toml`. Définir aussi le dossier de publication dans les paramètres du site Netlify.

## À savoir

La section Témoignages a été supprimée, et aucune statistique fictive n'est affichée. Les styles responsive se trouvent dans `src/app/app.css`.
