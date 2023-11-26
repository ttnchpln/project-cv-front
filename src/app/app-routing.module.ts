import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { EditAddEducationComponent } from './edit-add-education/edit-add-education.component';
import { EditAddExperienceComponent } from './edit-add-experience/edit-add-experience.component';
import { EditAddSkillComponent } from './edit-add-skill/edit-add-skill.component';
import { EditAddHobbyComponent } from './edit-add-hobby/edit-add-hobby.component';
import { EditFooterComponent } from './edit-footer/edit-footer.component';

const routes: Routes = [
  { path:'', component: AccueilComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/education/add', component: EditAddEducationComponent, data: { isEdit: false } },
  { path: 'admin/education/edit/:id', component: EditAddEducationComponent, data: { isEdit: true } },
  { path: 'admin/experience/add', component: EditAddExperienceComponent, data: { isEdit: false } },
  { path: 'admin/experience/edit/:id', component: EditAddExperienceComponent, data: { isEdit: true } },
  { path: 'admin/skill/add', component: EditAddSkillComponent, data: { isEdit: false } },
  { path: 'admin/skill/edit/:id', component: EditAddSkillComponent, data: { isEdit: true } },
  { path: 'admin/hobby/add', component: EditAddHobbyComponent, data: { isEdit: false } },
  { path: 'admin/hobby/edit/:id', component: EditAddHobbyComponent, data: { isEdit: true } },
  { path: 'admin/footer', component: EditFooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
