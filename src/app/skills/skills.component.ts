import { Component } from '@angular/core';
import {
  faHtml5,
  faJava,
  faJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faLanguage,
  faEarthEurope,
  faUserGear,
  faPlus,
  faPenToSquare,
  faTrashCan,
  faCube,
  faGear,
  faCode,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  isAdmin: boolean = window.localStorage.getItem('isAdmin') === 'true';  // on recupere dans le localstorage si on est admin ou pas

  iconPlus = faPlus;
  iconModify = faPenToSquare;
  iconDelete = faTrashCan;

  constructor(private adminService: AdminService) {}
  skills: any[] = [];

  ngOnInit() {
    this.getAllSkills();
  }

  public getAllSkills() {
    this.adminService.getSkills().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  getIconByName(iconName: string) {
    console.log(iconName);
    switch (iconName) {
      case 'HTML':
        return faCode;
      case 'Code':
        return faFileCode;
      case 'Java':
        return faJava;
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

  private handleUpdateResponse(skills: any[]) {
    this.skills = skills.map((skill) => ({
      ...skill,
      icon: this.getIconByName(skill.logo),
    }));
    console.log('skill = ');
    console.log(this.skills);
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des skills :', error);
  }

  public deleteSkill(event: any, id: number) {
    event.stopPropagation();
    this.adminService.deleteSkill(id).subscribe(() => this.getAllSkills());
  }
}
