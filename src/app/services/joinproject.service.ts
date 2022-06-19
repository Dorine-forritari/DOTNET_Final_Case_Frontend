import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

// URL to join a project 
const { usersApiUrl, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class JoinprojectService {

  constructor(private http: HttpClient) { }

  join(userId: number, project: Project []) : Observable<User>{

    // Patch

    // Header
    const headers = new HttpHeaders({
      "content-type": "application/json",
      "x-api-key": apiKey,
    })

    return this.http.patch<User>(usersApiUrl + "/" + userId, {

      project: [...project]

    }, {
       headers
    })

  }
}
