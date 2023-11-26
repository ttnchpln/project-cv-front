import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faHtml5,
  faJava,
  faJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faCode,
  faCube,
  faEarthEurope,
  faFileCode,
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
  faGear,
  faLanguage,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-add-skill',
  templateUrl: './edit-add-skill.component.html',
  styleUrls: ['./edit-add-skill.component.css'],
  providers: [NgModel], // Ajoutez cela
})
export class EditAddSkillComponent {
  newSkill: any = {
    label: '',
    title: '',
    logo: '',
  };

  skill: any = '';

  selectedIcon = 'Gear';

  iconList: any[] = [
    { label: 'Gear' },
    { label: 'HTML' },
    { label: 'Code' },
    { label: 'Java' },
    { label: 'JS' },
    { label: 'Python' },
    { label: 'React' },
    { label: 'Word' },
    { label: 'Excel' },
    { label: 'PowerPoint' },
    { label: 'Language' },
    { label: 'Earth' },
    { label: 'Cube' },
  ];

  getIconByName(iconName: string) {
    switch (iconName) {
      case 'HTML':
        return faCode;
      case 'Java':
        return faJava;
      case 'Code':
        return faFileCode;
      case 'JS':
        return faJs;
      case 'Python':
        return faPython;
      case 'React':
        return faReact;
      case 'FileWord':
        return faFileWord;
      case 'FileExcel':
        return faFileExcel;
      case 'FilePowerpoint':
        return faFilePowerpoint;
      case 'Language':
        return faLanguage;
      case 'Earth':
        return faEarthEurope;
      case 'Cube':
        return faCube;
      case 'Gear':
        return faGear;
      default:
        return faUserGear;
    }
  }

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
      .getSkillById(parseInt(this.route.snapshot.paramMap.get('id') ?? '0', 10))
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private handleUpdateResponse(skill: any) {
    if (skill == null) {
      this.isEdit = false;
    } else {
      this.skill = skill;
      this.skill.logo = this.getIconByName(skill.logo);
    }
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des skills :', error);
  }

  isEdit = false;

  addSkill() {
    this.adminService
      .createSkill({
        label: this.newSkill.label,
        title: this.newSkill.title,
        logo: this.selectedIcon,
      })
      .subscribe((e) => {
        this.router.navigate(['/skills']);
        console.log(e);
      });
  }
  editSkill() {
    console.log(this.selectedIcon);
    this.adminService
      .updateSkill(this.skill.id, {
        label: this.skill.label,
        title: this.skill.title,
        logo: this.selectedIcon,
      })
      .subscribe((e) => {
        this.router.navigate(['/skills']);
        console.log(e);
      });
  }
  cancel() {
    this.router.navigate(['/skills']);
  }
}
