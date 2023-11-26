import { Component } from '@angular/core';
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  constructor(private adminService: AdminService) {}

  accueil: any = '';
  recommendations: any[] = [];

  isAdmin: boolean = window.localStorage.getItem('isAdmin') === 'true';

  isProfilPopupOpen: boolean = false;
  isRecomPopupOpen: boolean = false;
  
  iconPlus = faPlus;
  iconModify = faPenToSquare;
  iconDelete = faTrashCan;

  newAuthor = '';
  newPosition = '';
  newText = '';
  adding: boolean = true;
  idToEdit: number = 0;

  ngOnInit() {
    this.getAccueils();
    this.getRecommendations();
  }

  getAccueils() {
    this.adminService.getAccueil().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  getRecommendations() {
    this.adminService.getRecommadentions().subscribe({
      next: this.putReadRecommendations.bind(this),
      error: this.handleError.bind(this),
    });
  }

  private handleUpdateResponse(accueil: any) {
    this.accueil = accueil[0];
    console.log(accueil);
  }

  private putReadRecommendations(recommendations: any[]) {
    this.recommendations = recommendations;
  }

  private handleError(error: any) {
    console.error(
      'Erreur lors de la récupération des éléments dacceuil :',
      error
    );
  }

  // pour ouvrir les popup d'ajout ou de modification
  openProfilPopup() {
    this.isProfilPopupOpen = true;
  }

  openRecomPopup(adding: boolean = true, recommandation: any = null) {
    this.isRecomPopupOpen = true;
    this.adding = adding;
    this.idToEdit = recommandation.id;
    this.newAuthor = recommandation.author;
    this.newPosition = recommandation.position;
    this.newText = recommandation.text;
  }

  // pour fermer les popup
  closeRecomPopup() {
    this.isRecomPopupOpen = false;
  }

  closeProfilPopup() {
    this.isProfilPopupOpen = false;
  }

  // modification du profil
  modifyProfil() {
    this.adminService
      .updateAccueil(1, {
        firstname: this.accueil.firstname,
        lastname: this.accueil.lastname,
        email: this.accueil.email,
        objective: this.accueil.objective,
        title: this.accueil.title,
      })
      .subscribe(() => {
        this.closeProfilPopup();
      });
  }

  // mdificatin ou ajout de recommendations
  modifyRecommendation() {
    if (this.adding) {
      this.adminService
        .createRecommendation({
          author: this.newAuthor,
          position: this.newPosition,
          text: this.newText,
        })
        .subscribe(() => {
          this.getRecommendations();
          this.closeRecomPopup();
        });
    } else {
      this.adminService
        .updateRecommendation(this.idToEdit, {
          author: this.newAuthor,
          position: this.newPosition,
          text: this.newText,
        })
        .subscribe(() => {
          this.getRecommendations();
          this.closeRecomPopup();
        });
    }
  }

// suppression de recommendations
  deleteRecommendation(id: number) {
    this.adminService.deleteRecommendation(id).subscribe(() => {
      this.getRecommendations();
    });
  }
}
