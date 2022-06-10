import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.component.html',
  styleUrls: ['./project-administration.component.scss'],
})
export class ProjectAdministrationComponent implements OnInit {
  currentProject: Project | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.currentProject = this.projectService.project;
  }
}
