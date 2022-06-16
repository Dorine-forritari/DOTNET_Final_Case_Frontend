import { AuthService } from '@auth0/auth0-angular';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project, ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';
import { Skill } from '../models/skill.model';
import { mockSkills } from '../data/mock-data';

const { mockProjectApiUrl, projectsApiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService implements OnInit {
  private _projects: Project[] = [];
  private _selectedProject: Project | undefined;
  // //TODO!!! all skills should come from API
  allSkills: Skill[] = mockSkills;

  get selectedProject(): Project | undefined {
    return this._selectedProject;
  }

  set selectedProject(project: Project | undefined) {
    this._selectedProject = project;
  }

  get projects(): Project[] {
    return this._projects;
  }

  set projects(projectList: Project[]) {
    this._projects = projectList;
  }

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe((profile) =>
      sessionStorage.setItem('user', JSON.stringify(profile, null, 2))
    );
  }

  // Fetch whole catalogue
  public fetchCatalogue(): void {
    this.http.get<ProjectResponse[]>(projectsApiUrl).subscribe({
      next: (response: any) => {
        // The following line is for turning the skill ID to skill names
        // this.getSkillNames(response);
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
