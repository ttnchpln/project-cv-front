import { Component, NgModule } from '@angular/core';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faH } from '@fortawesome/free-solid-svg-icons';

// Add the necessary icons to the library
library.add(faCheck);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private adminService: AdminService) {}

  options: AnimationOptions = {
    path: '/assets/animation_desktop.json',
  };

  name: string = '';
  email: string = '';
  message: string = '';

  isPopupOkOpen = false;

  iconCheck = faCheck;

  sendMessage() {
    this.adminService
      .sendMessage({
        name: this.name,
        message: this.message,
        email: this.email,
      })
      .subscribe(() => {
        this.clearInputs();

        this.isPopupOkOpen = true;
      });
  }

  clearInputs() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  closePopup() {
    this.isPopupOkOpen = false;
  }
}

@NgModule({
  declarations: [ContactComponent],
  imports: [LottieModule, CommonModule, FormsModule, FontAwesomeModule],
})
export class ContactModule {}
