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
