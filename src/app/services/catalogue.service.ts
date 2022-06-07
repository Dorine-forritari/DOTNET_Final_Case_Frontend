import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}

  public catalogue() {
    // Test URL
    return this.http.get<ProjectResponse[]>(apiUrl);
  }

  public getSingleProject(id: number) {
    this.http.get(apiUrl + '/' + id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }

  public getAllProjects() {
    this.http.get<ProjectResponse[]>(apiUrl).subscribe({
      next: (response: ProjectResponse[]) => {
        console.log(response);
        let projects = response.map((element) => {
          console.log(element);
          return element;
        });
        return projects;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
