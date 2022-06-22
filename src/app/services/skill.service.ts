import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill.model';
import { SkillUser } from '../models/skilluser.model';
import { UserService } from './user.service';

const { skillsApiUrl, skillUserApiUrl, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  private _skills: Skill[] = [];
  private _skillsUserHas: SkillUser[] = [];

  get skills(): Skill[] {
    return this._skills;
  }

  constructor(private http: HttpClient, private userService: UserService) { }

  // fetch all skills from database
  public getSkillsFromDb() {
    return lastValueFrom(this.http.get<Skill[]>(skillsApiUrl));
  }

  // get skills that user already has
  public getSkillsByUser() {
    return lastValueFrom(this.http.get<SkillUser[]>(skillUserApiUrl + "/" + this.userService.user?.userId));
  }

  // fetch all skills that are in database and user doesn't yet have
  // These skills are displayed in the drop-down menu on the Edit Profile page
  public async fetchAllSkills() {
    const skills = await this.getSkillsFromDb();
    this._skills = skills;
   
    // Get skills that user already has
    const skillsUserHas = await this.getSkillsByUser();
    this._skillsUserHas = skillsUserHas;

    // Remove skills that user already has from total list of skills
    let indexList: number[] = [];
    if (this._skills.length > 0 && this._skillsUserHas.length > 0) {
      for (let i = 0; i < this._skills!.length; i++) {
        for (let j = 0; j < this._skillsUserHas!.length; j++) {
          if (this._skills[i]!.skillId === this._skillsUserHas[j]!.skillId) {
            indexList.push(this._skills[i].skillId);
          }
        }
      }
      for (let i = 0; i < indexList.length; i++) {
        this._skills = this._skills.filter(s => s.skillId !== indexList[i]);
      }
    }
  }

  public addSkillUser(skillId: number, userId: number): Observable<SkillUser> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'accept': 'application/json',
      'x-api-key': apiKey,
    });
    return this.http.post<SkillUser>(skillUserApiUrl + "?skillId=" + skillId + "&userId=" + userId, { headers });
  }

}