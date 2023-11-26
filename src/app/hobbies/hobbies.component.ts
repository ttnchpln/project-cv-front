import { Component } from '@angular/core';
import {
  faBasketball,
  faCode,
  faCube,
  faDumbbell,
  faEarthEurope,
  faGear,
  faLanguage,
  faMusic,
  faPen,
  faPenToSquare,
  faPhotoVideo,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent {
  constructor(private adminService: AdminService) {}
  hobbies: any[] = [];

  iconPlus = faPlus;
  iconModify = faPenToSquare;
  iconDelete = faTrashCan;

  isAdmin: boolean =
    window.localStorage.getItem('isAdmin') === 'true';  // on recupere dans le localstorage si on est admin ou pas

  ngOnInit() {
    this.getAllHobbies();
  }

  getAllHobbies() {
    this.adminService.getHobbies().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  private getIconByName(iconName: string) {
    switch (iconName) {
      case 'Basketball':
        return faBasketball;
      case 'Tennis':
        return faTableTennis;
      case 'Bitcoin':
        return faBitcoin;
      case 'Video':
        return faVideo;
      case 'Space':
        return faShuttleSpace;
      case 'Photo':
        return faPhotoVideo;
      case 'Music':
        return faMusic;
      case 'Sport':
        return faDumbbell;
      case 'Drawing':
        return faPen;
      case 'Swimming':
        return faPersonSwimming;
      case 'Code':
        return faCode;
      case 'Language':
        return faLanguage;
      case 'Earth':
        return faEarthEurope;
      case 'Cube':
        return faCube;
      case 'Gear':
        return faGear;
      default:
        return faCheck;
    }
  }

  private toReadableDate(date: string): string {
    const ISODate: Date = new Date(date);

    // Tableau des noms des mois
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${ISODate.getDate()} ${
      monthNames[ISODate.getMonth()]
    } ${ISODate.getFullYear()}`;
  }

  private handleUpdateResponse(hobbies: any[]) {
    this.hobbies = hobbies.map((hobby) => ({
      ...hobby,
      date: this.toReadableDate(hobby.dates),
      icon: this.getIconByName(hobby.logo),
    }));
  }

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des hobbies :', error);
  }

  public deleteHobby(event: any, id: number) {
    event.stopPropagation();
    this.adminService.deleteHobby(id).subscribe((e) => this.getAllHobbies());
  }
}
