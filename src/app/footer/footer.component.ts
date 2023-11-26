import { Component } from '@angular/core';
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faSnapchatGhost,
} from '@fortawesome/free-brands-svg-icons';
import { AdminService } from '../services/admin.service';
import { AnimationOptions } from 'ngx-lottie';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  hireMe: AnimationOptions = {
    path: '/assets/hireMe.json',
  };
  constructor(private adminService: AdminService) {}
  footers: any[] = [];

  iconModify = faPenToSquare;

  isAdmin: boolean =
    window.localStorage.getItem('isAdmin') == 'true' ? true : false;

  ngOnInit() {
    this.adminService.getFooters().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }
  private getIconByName(iconName: string) {
    switch (iconName) {
      case 'Facebook':
        return faFacebook;
      case 'XTwitter':
        return faXTwitter;
      case 'Github':
        return faGithub;
      case 'LinkedIn':
        return faLinkedinIn;
      case 'Instagram':
        return faInstagram;
      case 'Snapchat':
        return faSnapchatGhost;
      default:
        return null;
    }
  }

  private handleUpdateResponse(footers: any[]) {
    this.footers = footers.map((footer) => ({
      ...footer,
      icon: this.getIconByName(footer.logo),
    }));
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des footers :', error);
  }
}
