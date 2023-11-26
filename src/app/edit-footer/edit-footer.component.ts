import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faSnapchatGhost,
} from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-footer',
  templateUrl: './edit-footer.component.html',
  styleUrls: ['./edit-footer.component.css'],
})
export class EditFooterComponent {
  isAdmin: boolean = window.localStorage.getItem('isAdmin') === 'true';

  constructor(private adminService: AdminService, private router: Router) {}

  socialnetworks: any[] = [];
  isPopupOpen: boolean = false;

  iconPlus = faPlus;
  iconModify = faPenToSquare;
  iconDelete = faTrashCan;

  newLink = '';
  newSocialnetwork = '';
  adding: boolean = true;
  idToEdit: number = 0;

  openPopup(
    link: string = '',
    sn: string = 'Facebook',
    adding: boolean = true,
    id: number = 0
  ) {
    this.newLink = link;
    this.newSocialnetwork = sn;
    this.isPopupOpen = true;
    this.adding = adding;
    this.idToEdit = id;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  ngOnInit() {
    this.getAllSocialnetworks();
    if (!this.isAdmin) {
      this.router.navigate(['/']);
    }
  }

  public getAllSocialnetworks() {
    this.adminService.getFooters().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }
  addSocialnetwork() {
    if (this.adding) {
      this.adminService
        .createFooter({ link: this.newLink, logo: this.newSocialnetwork })
        .subscribe(() => {
          this.closePopup();
          window.location.reload();
        });
    } else {
      this.adminService
        .updateFooter(this.idToEdit, {
          link: this.newLink,
          logo: this.newSocialnetwork,
        })
        .subscribe(() => {
          this.closePopup();
          window.location.reload();
        });
    }
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

  private handleUpdateResponse(socialnetworks: any[]) {
    this.socialnetworks = socialnetworks.map((sn) => ({
      ...sn,
      icon: this.getIconByName(sn.logo),
    }));
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des socialnetworks :', error);
  }

  public deleteSocialnetwork(event: any, id: number) {
    event.stopPropagation();
    this.adminService
      .deleteFooter(id)
      .subscribe(() => window.location.reload());
  }
}
