import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { Project } from 'src/app/models/project.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  selectedProject: Project | undefined;
  projectsList: Project[] | undefined;

  // Single project
  get projectId(): number | undefined {
    return this.projectService.project?.id;
  }

  // All projects
  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  constructor(
    private projectService: ProjectService,
    private catalogueService: CatalogueService
  ) {}

  ngOnInit(): void {
    const found = this.projects.find((element) => {
      return element.id === this.projectId;
    });

    const projectJson = JSON.parse(sessionStorage.getItem('project') || '{}');

    if (found === undefined) {
      this.selectedProject = projectJson;
    } else {
      sessionStorage.setItem(
        'project',
        JSON.stringify(this.projectService.project)
      );

      this.selectedProject = projectJson;
    }

    console.log(JSON.parse(sessionStorage.getItem('project') || '{}'));

    // if (sessionStorage.getItem('project') === null) {
    //   this.selectedProject = this.project;
    // } else {
    //   const selectedProject = JSON.parse(
    //     sessionStorage.getItem('project') || '{}'
    //   );
    //   this.selectedProject = selectedProject;
    // }
    // GET PROJECT ID FROM URL AND SEND TO CATALOGUESERVICE
    //   console.log(this.route.snapshot.queryParamMap.get('id'));
    //   const projectId: number = Number(
    //     this.route.snapshot.queryParamMap.get('id')
    //   );
    //   this.catalogueService.fetchProject(projectId);
  }
}
