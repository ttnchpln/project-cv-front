import { Component } from '@angular/core';
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private adminService: AdminService) { }
  experiences: any[] = [];
  
  iconPlus = faPlus;
  iconModify = faPenToSquare;
  iconDelete = faTrashCan;

  isAdmin: boolean = window.localStorage.getItem("isAdmin") == "true";

  ngOnInit() {
    this.getAllExperiences();
  }

  public getAllExperiences() {
    this.adminService.getExperiences().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  private handleUpdateResponse(experiences: any[]) {
    this.experiences = experiences;
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des expériences :', error);
  }

  public deleteExperience(event: any, id: number) {
    event.stopPropagation();
    this.adminService
      .deleteExperience(id)
      .subscribe(() => this.getAllExperiences());
  }
}
