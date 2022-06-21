import { AuthService } from '@auth0/auth0-angular';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project, ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';
import { Skill } from '../models/skill.model';
import { lastValueFrom } from 'rxjs';
import { SkillProject } from '../models/skillproject.model';

const { mockProjectApiUrl, projectsApiUrl, skillProjectsApiUrl, skillsApiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService implements OnInit {
  private _projects: Project[] = [];
  private _selectedProject: Project | undefined;

  // projectsForCatalogue is used for Industry Switching on Catalogue Page
  public projectsForCatalogue: Project[] = [];

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
        this._projects = response.map((project: Project) => {
          return {
            ...project,
          };
        });
        // Fetch skills for each project
        for (let i = 0; i < this._projects.length; i++) {
          this.fetchSkillsByProject(this._projects[i].projectId);
        }
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
        next: (response: any) => {
          console.log(response);
        },
        error: () => {},
        complete: () => {},
      });
  }

  // fetch all skillProject objects for a certain project
  public getSkillProjects(projectId: number) {
    return lastValueFrom(this.http.get<SkillProject[]>(skillProjectsApiUrl + '/'+ projectId));
  }

  // fetch a skill by skillId
  public getSkill(skillId: number) {
    return lastValueFrom(this.http.get<Skill>(skillsApiUrl + '/'+ skillId));
  }

  // Add skill names to a project
  public async fetchSkillsByProject(projectId: number): Promise<void> {
    // first get the skillProject objects
    const skillProjects = await this.getSkillProjects(projectId);
    const skillNames = [];
    // For every skillProject object, fetch the skill and push the skill.name to an array
    for (let i = 0; i < skillProjects.length; i++) {
      let skill = await this.getSkill(skillProjects[i].skillId);
      skillNames.push(skill.name);
    }
    // Find the project in this._projects and add the skill names
    for (let i = 0; i < this._projects.length; i++) {
      if (this._projects[i].projectId === projectId) {
        this._projects[i].skills = skillNames;
      }
    }
    // After skills have been added, bring projectsForCatalogue up to date with _projects
    this.projectsForCatalogue = this._projects;
  }
}
