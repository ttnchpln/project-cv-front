import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  private adminUrl = 'http://localhost:8080'; // notre backend

  // liste de tous les appels au back dont on a besoin

  createExperience(experience: Admin['experiences']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/experiences`, experience);
  }
  createEducation(education: Admin['formations']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/formations`, education);
  }
  createSkill(skill: Admin['skills']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/skills`, skill);
  }
  createHobby(hobby: Admin['hobbies']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/hobbies`, hobby);
  }
  createFooter(footer: Admin['socialnetworks']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/socialnetworks`, footer);
  }
  createAccueil(accueil: Admin['profil']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/profil`, accueil);
  }
  createRecommendation(recommandation: Admin['recommendation']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/recommandations`, recommandation);
  }
  sendMessage(message: Admin['message']): Observable<Admin> {
    return this.http.post<Admin>(`${this.adminUrl}/messages`, message)
  }

  getExperiences(): Observable<Admin['experiences'][]> {
    return this.http.get<Admin['experiences'][]>(
      `${this.adminUrl}/experiences`
    );
  }
  getEducations(): Observable<Admin['formations'][]> {
    return this.http.get<Admin['formations'][]>(`${this.adminUrl}/formations`);
  }
  getSkills(): Observable<Admin['skills'][]> {
    return this.http.get<Admin['skills'][]>(`${this.adminUrl}/skills`);
  }
  getHobbies(): Observable<Admin['hobbies'][]> {
    return this.http.get<Admin['hobbies'][]>(`${this.adminUrl}/hobbies`);
  }
  getFooters(): Observable<Admin['socialnetworks'][]> {
    return this.http.get<Admin['socialnetworks'][]>(
      `${this.adminUrl}/socialnetworks`
    );
  }
  getAccueil(): Observable<Admin['profil']> {
    return this.http.get<Admin['profil']>(`${this.adminUrl}/profil`);
  }

  getRecommadentions(): Observable<Admin['recommendation'][]> {
    return this.http.get<Admin['recommendation'][]>(
      `${this.adminUrl}/recommandations`
    );
  }

  getEducationById(id: number): Observable<Admin['formations'][]> {
    return this.http.get<Admin['formations'][]>(
      `${this.adminUrl}/formations/${id}`
    );
  }
  getExperienceById(id: number): Observable<Admin['experiences'][]> {
    return this.http.get<Admin['experiences'][]>(
      `${this.adminUrl}/experiences/${id}`
    );
  }
  getSkillById(id: number): Observable<Admin['skills'][]> {
    return this.http.get<Admin['skills'][]>(`${this.adminUrl}/skills/${id}`);
  }
  getHobbyById(id: number): Observable<Admin['hobbies'][]> {
    return this.http.get<Admin['hobbies'][]>(`${this.adminUrl}/hobbies/${id}`);
  }

  updateExperience(
    id: number,
    experiences: Admin['experiences']
  ): Observable<any> {
    return this.http.post(`${this.adminUrl}/experiences/${id}`, experiences);
  }
  updateEducation(
    id: number,
    educations: Admin['formations']
  ): Observable<any> {
    return this.http.post(`${this.adminUrl}/formations/${id}`, educations);
  }
  updateSkill(id: number, skills: Admin['skills']): Observable<any> {
    return this.http.post(`${this.adminUrl}/skills/${id}`, skills);
  }
  updateHobby(id: number, hobbies: Admin['hobbies']): Observable<any> {
    return this.http.post(`${this.adminUrl}/hobbies/${id}`, hobbies);
  }
  updateFooter(id: number, footers: Admin['socialnetworks']): Observable<any> {
    return this.http.post(`${this.adminUrl}/socialnetworks/${id}`, footers);
  }
  updateAccueil(id: number, accueils: Admin['profil']): Observable<any> {
    return this.http.post(`${this.adminUrl}/profil/${id}`, accueils);
  }

  updateRecommendation(id: number, recommandation: Admin['recommendation']): Observable<any> {
    return this.http.post(`${this.adminUrl}/recommandations/${id}`, recommandation);
  }

  deleteExperience(experienceId: number): Observable<Admin> {
    return this.http.delete<Admin>(
      `${this.adminUrl}/experiences/${experienceId}`
    );
  }
  deleteEducation(educationId: number): Observable<Admin> {
    return this.http.delete<Admin>(
      `${this.adminUrl}/formations/${educationId}`
    );
  }
  deleteSkill(skillsId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/skills/${skillsId}`);
  }
  deleteHobby(hobbyId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/hobbies/${hobbyId}`);
  }
  deleteFooter(footerId: number): Observable<Admin> {
    return this.http.delete<Admin>(
      `${this.adminUrl}/socialnetworks/${footerId}`
    );
  }
  deleteAccueils(accueilId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/profil/${accueilId}`);
  }
  deleteRecommendation(recoId: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.adminUrl}/recommandations/${recoId}`);
  }
}
