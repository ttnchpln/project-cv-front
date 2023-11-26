import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-add-experience',
  templateUrl: './edit-add-experience.component.html',
  styleUrls: ['./edit-add-experience.component.css'],
})
export class EditAddExperienceComponent {
  newExperience: any = {
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  };
  experience: any = '';

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
      .getExperienceById(
        parseInt(this.route.snapshot.paramMap.get('id') ?? '0', 10)
      )
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private handleUpdateResponse(experience: any) {
    if (experience == null) {
      this.isEdit = false;
    } else {
      console.log(experience);
      experience.startDate = experience.startDate.substring(0, 10);
      experience.endDate = experience.endDate.substring(0, 10);
      this.experience = experience;
    }
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des experiences :', error);
  }

  isEdit = false;

  // ajout d'une experience
  addExperience() {
    this.adminService
      .createExperience({
        title: this.newExperience.title,
        company: this.newExperience.company,
        location: this.newExperience.location,
        startDate: this.newExperience.startDate,
        endDate: this.newExperience.endDate,
        description: this.newExperience.description,
      })
      .subscribe((e) => {
        this.router.navigate(['/experience']);
        console.log(e);
      });
  }

  // modification d'une experience
  editExperience() {
    this.adminService
      .updateExperience(this.experience.id, {
        title: this.experience.title,
        company: this.experience.company,
        location: this.experience.location,
        startDate: this.experience.startDate,
        endDate: this.experience.endDate,
        description: this.experience.description,
      })
      .subscribe((e) => {
        this.router.navigate(['/experience']);
        console.log(e);
      });
  }
  cancel() {
    this.router.navigate(['/experience']);
  }
}
