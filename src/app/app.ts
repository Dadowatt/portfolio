import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  LucideCode2,
  LucidePanelsTopLeft,
  LucideBrainCircuit,
  LucideDownload,
  LucideServer,
  LucideMail,
  LucideHeart
} from '@lucide/angular';

import { profile, projects, services, skills, timeline } from './portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  FormsModule,
  LucideCode2,
  LucidePanelsTopLeft,
  LucideBrainCircuit,
  LucideDownload,
  LucideServer,
  LucideMail,
  LucideHeart
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profile = profile;
  projects = projects;
  services = services;
  skills = skills;
  timeline = timeline;
  menuOpen = false;
  year = new Date().getFullYear();
  contact = { name: '', email: '', subject: '', message: '' };
  contactNotice = '';

  closeMenu(): void {
    this.menuOpen = false;
  }

  sendMessage(): void {
    const email = this.profile.email.trim();
    if (!email) {
      this.contactNotice = 'Pour activer le formulaire, ajoute ton adresse e-mail dans src/app/portfolio-data.ts.';
      return;
    }
    const subject = encodeURIComponent(this.contact.subject || 'Contact depuis le portfolio');
    const body = encodeURIComponent(`Nom : ${this.contact.name}\nEmail : ${this.contact.email}\n\n${this.contact.message}`);
    // Pas de backend : ouvre le logiciel de messagerie de la personne.
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    this.contactNotice = "Ton application de messagerie doit s'ouvrir pour envoyer le message.";
  }
}
