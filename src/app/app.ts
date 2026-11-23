
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  LucideCode2,
  LucidePanelsTopLeft,
  LucideBrainCircuit,
  LucideDownload,
  LucideMonitor,
  LucideServer,
  LucideWorkflow,
  LucideMail,
  LucideArrowUpRight,
  LucideHeart
} from '@lucide/angular';

import {
  profile,
  projects,
  services,
  skills,
  timeline
} from './portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    LucideCode2,
    LucidePanelsTopLeft,
    LucideBrainCircuit,
    LucideDownload,
    LucideMonitor,
    LucideServer,
    LucideWorkflow,
    LucideMail,
    LucideArrowUpRight,
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

  private readonly cdr = inject(ChangeDetectorRef);

  menuOpen = false;
  year = new Date().getFullYear();

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactNotice = '';
  isSending = false;

  // Remplacer TON_IDENTIFIANT par l'identifiant Formspree.
  private readonly formspreeEndpoint =
    'https://formspree.io/f/xrpqooew';

  closeMenu(): void {
    this.menuOpen = false;
  }

  async sendMessage(): Promise<void> {
    if (this.isSending) {
      return;
    }

    const name = this.contact.name.trim();
    const email = this.contact.email.trim();
    const subject = this.contact.subject.trim();
    const message = this.contact.message.trim();

    // Vérification des champs.
    if (!name || !email || !subject || !message) {
      this.contactNotice = 'Veuillez remplir tous les champs.';
      return;
    }

    // Vérification simple de l'adresse e-mail.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      this.contactNotice = 'Veuillez saisir une adresse e-mail valide.';
      return;
    }

    if (this.formspreeEndpoint.includes('TON_IDENTIFIANT')) {
      this.contactNotice = 'Le formulaire de contact n\'est pas encore configuré.';
      return;
    }

    this.isSending = true;
    this.contactNotice = '';

    try {
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          objet: subject,
          message
        })
      });

      if (!response.ok) {
        throw new Error('Échec de l\'envoi');
      }

      // Confirmation.
      this.contactNotice = 'Votre message a bien été envoyé. Merci !';

      // Réinitialisation du formulaire après succès.
      this.contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

    } catch (error) {
      console.error('Erreur lors de l\'envoi :', error);

      this.contactNotice =
        'Impossible d\'envoyer votre message. Veuillez réessayer.';

    } 
      finally {
        this.isSending = false;
        this.cdr.markForCheck();
      }
  }
}
