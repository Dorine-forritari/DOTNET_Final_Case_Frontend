import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project, ProjectResponse } from '../models/project.model';

// URL to join a project 
const { projectuserApiUrl, apiKey } = environment;

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
    return this.http.post<User>(projectuserApiUrl + "/?projectId=" + projectId + "&userId=" + userId + "&owner=false",{headers})
  }

  // checkAlreadyJoined(){

  //   this.http.get<UserResponse[]>(usersApiUrl + '/' + userId).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //     },
  //     error: () => {},
  //     complete: () => {},
  //   });

  // }

}
