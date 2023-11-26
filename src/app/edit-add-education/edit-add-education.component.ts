import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-add-education',
  templateUrl: './edit-add-education.component.html',
  styleUrls: ['./edit-add-education.component.css'],
})
export class EditAddEducationComponent {
  newEducation: any = {
    school: '',
    startDate: '',
    endDate: '',
    description: '',
    logoUrl: '',
  };
  education: any = '';

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}
  ngOnInit() {
    this.isEdit = this.route.snapshot.data['isEdit'];
    if (this.isEdit) {
      console.log('On edit');
    }

    this.adminService
      .getEducationById(
        parseInt(this.route.snapshot.paramMap.get('id') ?? '0', 10)
      )
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private handleUpdateResponse(education: any) {
    if (education == null) {
      this.isEdit = false;
    } else {
      this.education = education;
      this.education.startDate = education.startDate.substring(0, 10);
      this.education.endDate = education.endDate.substring(0, 10);
      console.log(this.education);
    }
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des educations :', error);
  }

  isEdit = false;

  // ajout d'une formation
  addEducation() {
    this.adminService
      .createEducation({
        school: this.newEducation.school,
        startDate: this.newEducation.startDate,
        endDate: this.newEducation.endDate,
        description: this.newEducation.description,
      })
      .subscribe((e) => {
        this.router.navigate(['/education']);
        console.log(e);
      });
  }

  // modification d'une formation
  editEducation() {
    this.adminService
      .updateEducation(this.education.id, {
        school: this.education.school,
        startDate: this.education.startDate,
        endDate: this.education.endDate,
        description: this.education.description,
      })
      .subscribe((e) => {
        this.router.navigate(['/education']);
        console.log(e);
      });
  }
  cancel() {
    this.router.navigate(['/education']);
  }
}
