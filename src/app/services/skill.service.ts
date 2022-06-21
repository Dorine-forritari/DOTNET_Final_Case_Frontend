import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill.model';
import { SkillUser } from '../models/skilluser.model';

const { skillsApiUrl, skillUserApiUrl, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  private _skills: Skill[] = [];

  get skills(): Skill[] {
    return this._skills;
  }

  constructor(private http: HttpClient) { }

  // fetch all skills from database
  public getSkillsFromDb() {
    return lastValueFrom(this.http.get<Skill[]>(skillsApiUrl));
  }

  // get skills that user already has
  public getSkillsByUser() {
    return lastValueFrom(this.http.get<SkillUser[]>(skillUserApiUrl));
  }

  // fetch all skills that are in database and user doesn't yet have
  // These skills are displayed in the drop-down menu on the Edit Profile page
  public async fetchAllSkills() {
    const skills = await this.getSkillsFromDb();
    this._skills = skills;
    // Remove skills from array that user already has
    const skillsUserHas = await this.getSkillsByUser();
    for (let i = 0; i < this._skills.length; i++) {
      for (let j = 0; j < skillsUserHas.length; j++) {
        if (this._skills[i].id === skillsUserHas[j].skillId) {
          this._skills.splice(i, 1);
        }
      }
    }
  }

  public addSkillUser(skillId: number, userId: number): Observable<SkillUser> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey,
    });
    return this.http.post<SkillUser>(skillUserApiUrl + "/?skillId=" + skillId + "&userId=" + userId, { headers });
  }

}