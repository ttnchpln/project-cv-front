import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './services/admin.service';
import { FormsModule } from '@angular/forms';
import { EditAddEducationComponent } from './edit-add-education/edit-add-education.component';
import { EditAddExperienceComponent } from './edit-add-experience/edit-add-experience.component';
import { EditAddSkillComponent } from './edit-add-skill/edit-add-skill.component';
import { EditAddHobbyComponent } from './edit-add-hobby/edit-add-hobby.component';
import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { ContactComponent, ContactModule } from './contact/contact.component';


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    HobbiesComponent,
    FooterComponent,
    AccueilComponent,
    EditAddEducationComponent,
    EditAddExperienceComponent,
    EditAddSkillComponent,
    EditAddHobbyComponent,
    EditFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LottieModule.forRoot({ player: playerFactory }),
    HttpClientModule,
    FormsModule,
    ContactModule,
  ],
  providers: [AdminService,],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
