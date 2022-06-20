import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project, ProjectResponse } from '../models/project.model';
import { ProjectUser } from '../models/projectuser.model';

// URL to join a project 
const { projectUserApiUrl, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class JoinprojectService {

  constructor(private http: HttpClient) { }

  join(userId: number, projectId: number) : Observable<User>{

    // Header
    const headers = new HttpHeaders({
      "content-type": "application/json",
      "x-api-key": apiKey,
    })

    // Post method to join a project
    return this.http.post<User>(projectUserApiUrl + "/?projectId=" + projectId + "&userId=" + userId + "&owner=false",{headers})
  }


  // fetch all ProjectUser objects for a certain user
  public getProjectUsers(userId: number) {
    return lastValueFrom(this.http.get<ProjectUser[]>(projectUserApiUrl + '/' + userId));
  }

  public async checkAlreadyJoined(userId: number, projectId: number){

    let alreadyJoined = false;
    const projectUsers = await this.getProjectUsers(userId);
    for(let i = 0; i < projectUsers.length; i++)
    {
      if(projectUsers[i].projectId === projectId){
        alreadyJoined = true;
      }
    }
    return alreadyJoined;
  }
  

}
