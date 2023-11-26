import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private location: Location) {}
    
    toogle = false;
    toggleImgPath = "../../assets/menu.svg";
    links = ['Experience', 'Education', 'Skills', 'Hobbies', 'Contact']

    isChecked: boolean = window.localStorage.getItem("isAdmin") == "true" ? true : false;

    adminCheckChange() {
      if (this.isChecked) {
        window.localStorage.setItem("isAdmin", "true");
      } else {
        window.localStorage.setItem("isAdmin", "false");
      }
      this.reloadPage();
    }

    reloadPage(){
      window.location.reload();
    }

    setToggle = () => {
      this.toogle = !this.toogle;
      if(this.toogle){
        this.toggleImgPath = "../../assets/close.svg"
      } else {
        this.toggleImgPath = "../../assets/menu.svg"
      }
    }
}
