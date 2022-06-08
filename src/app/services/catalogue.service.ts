import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';

const { mockProjectApiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private _projects: Project[] = [];

  get projects(): Project[] {
    return this._projects;
  }

  set projects(projectList: Project[]) {
    if (projectList === undefined) {
      throw new Error('The user is undefined');
    }
    sessionStorage.setItem('projects', JSON.stringify(projectList));
    this._projects = projectList;
  }

  constructor(private http: HttpClient) {}

  // Fetch whole catalogue
  public fetchCatalogue(): void {
    this.http.get<ProjectResponse[]>(mockProjectApiUrl).subscribe({
      next: (response: any) => {
        this._projects = response.map((project: Project) => {
          return {
            ...project,
          };
        });
      },
      error: () => {},
      complete: () => {},
    });
  }

  // Fetch single project based on ID
  public fetchProject(projectId: number): void {
    this.http
      .get<ProjectResponse[]>(mockProjectApiUrl + '/' + projectId)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: () => {},
        complete: () => {},
      });
  }
}
