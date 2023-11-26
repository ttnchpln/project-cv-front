import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  constructor(private adminService: AdminService, private router: Router) {}
  educations: any[] = [];
  
  iconPlus = faPlus;
  iconModify = faPenToSquare;
  iconDelete = faTrashCan;

  isAdmin: boolean =
    window.localStorage.getItem('isAdmin') === 'true';  // on recupere dans le localstorage si on est admin ou pas

  ngOnInit() {
    this.getAllEducations();
  }

  getAllEducations() {
    this.adminService.getEducations().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  private handleUpdateResponse(educations: any[]) {
    this.educations = educations;
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des educations :', error);
  }

  public deleteEducation(event: any, id: number) {
    event.stopPropagation();
    this.adminService
      .deleteEducation(id)
      .subscribe(() => this.getAllEducations());
  }
}
