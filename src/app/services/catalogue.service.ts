import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private _projects: Project[] = [];

  get projects(): Project[] {
    return this._projects;
  }

  constructor(private http: HttpClient) {}

  public catalogue(projectId?: number) {
    if (projectId === undefined) {
      return this.http.get<ProjectResponse[]>(apiUrl);
    } else {
      return this.http.get<ProjectResponse[]>(apiUrl + '/' + projectId);
    }
  }

  // Fetch whole catalogue
  public fetchCatalogue(): void {
    this.catalogue().subscribe({
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
    this.catalogue(projectId).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
