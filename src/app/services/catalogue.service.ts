import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';
import { Skill } from '../models/skill.model';
import { mockSkills } from '../data/mock-data';

const { mockProjectApiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private _projects: Project[] = [];
  // //TODO!!! all skills should come from API
  allSkills: Skill[] = mockSkills;

  get projects(): Project[] {
    return this._projects;
  }

  set projects(projectList: Project[]) {
    if (projectList === undefined) {
      throw new Error('The user is undefined');
    }
    sessionStorage.setItem('projects-list', JSON.stringify(projectList));
    this._projects = projectList;
  }

  constructor(private http: HttpClient) {}

  // Fetch whole catalogue
  public fetchCatalogue(): void {
    this.http.get<ProjectResponse[]>(mockProjectApiUrl).subscribe({
      next: (response: any) => {
        this.getSkillNames(response);
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

  getSkillNames(projects: Project[]): void {
    projects.map((project: { skills: string[] }) => {
      for (let i = 0; i < project.skills.length; i++) {
        const found = this.allSkills.find(
          (e) => e.id === Number(project.skills[i])
        );
        if (found === undefined) {
          throw new Error('Project is undefined');
        } else {
          project.skills.splice(i, 1, found.name);
        }
      }
    });
    this._projects = this.projects;
  }
}
