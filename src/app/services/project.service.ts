import { Project } from 'src/app/models/project.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _project: Project | undefined;

  get project(): Project | undefined {
    return this._project;
  }

  set project(singleProject: Project | undefined) {
    if (singleProject === undefined) {
      throw new Error('Project is undefined');
    }
    // sessionStorage.setItem('project', JSON.stringify(singleProject));
    this._project = singleProject;
  }

  constructor() {}
}
