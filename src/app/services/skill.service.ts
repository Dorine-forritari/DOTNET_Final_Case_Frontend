import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill.model';


// URL to join a project 
const { skillsApiUrl, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private _skills: Skill[] = [];
  get skills(): Skill[] {
    
    return this._skills;
 
  }

  constructor(private http: HttpClient) { }



// fetch all ProjectUser objects for a certain user
public getSkillTest() {
  
  return lastValueFrom(this.http.get<Skill[]>(skillsApiUrl));

}



public async sendSkills(){

  const skills = await this.getSkillTest();
  let skillsArray = [];
  for(let i = 0; i < skills.length; i++)
  {
    skillsArray.push(skills[i]);
  }
  this._skills = skillsArray;
  }
  
}




