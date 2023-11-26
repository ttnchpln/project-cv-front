import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBitcoin, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBasketball, faCheck, faCode, faCube, faDumbbell, faEarthEurope, faFileExcel, faFilePowerpoint, faFileWord, faGear, faLanguage, faMusic, faPen, faPersonSwimming, faPhotoVideo, faShuttleSpace, faTableTennis, faUserGear, faVideo } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-add-hobby',
  templateUrl: './edit-add-hobby.component.html',
  styleUrls: ['./edit-add-hobby.component.css'],
})
export class EditAddHobbyComponent {
  newHobby: any = {
    title: '',
    logo: '',
    description: '',
    dates: '',
  };

  hobby: any = '';

  selectedIcon = 'Gear';

  iconList: any[] = [
    { label: 'Basketball' },
    { label: 'Tennis' },
    { label: 'Bitcoin' },
    { label: 'Video' },
    { label: 'Space' },
    { label: 'Photo' },
    { label: 'Music' },
    { label: 'Sport' },
    { label: 'Drawing' },
    { label: 'Swimming' },
    { label: 'Code' },
    { label: 'Language' },
    { label: 'Earth' },
    { label: 'Cube' },
    { label: 'Check' },
  ];

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
      .getHobbyById(parseInt(this.route.snapshot.paramMap.get('id') ?? '0', 10))
      .subscribe({
        next: this.handleUpdateResponse.bind(this),
        error: this.handleError.bind(this),
      });
  }

  private handleUpdateResponse(hobby: any) {
    if (hobby == null) {
      this.isEdit = false;
    } else {
      this.hobby = hobby;
    }
  }

  getIconByName(iconName: string) {
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

  private handleError(error: any) {
    console.error('Erreur lors de la récupération des hobbies :', error);
  }

  isEdit = false;

  addHobby() {
    this.adminService
      .createHobby({
        title: this.newHobby.title,
        logo: this.selectedIcon,
        description: this.newHobby.description,
        dates: this.newHobby.dates,
      })
      .subscribe((e) => {
        this.router.navigate(['/hobbies']);
        console.log(e);
      });
  }
  editHobby() {
    this.adminService
      .updateHobby(this.hobby.id, {
        title: this.hobby.title,
        logo: this.selectedIcon,
        description: this.hobby.description,
        dates: this.hobby.dates,
      })
      .subscribe((e) => {
        this.router.navigate(['/hobbies']);
        console.log(e);
      });
  }
  cancel() {
    this.router.navigate(['/hobbies']);
  }
}
