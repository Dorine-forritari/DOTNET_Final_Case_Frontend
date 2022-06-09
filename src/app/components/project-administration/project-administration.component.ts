import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.component.html',
  styleUrls: ['./project-administration.component.scss'],
})
export class ProjectAdministrationComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    console.log(this.projectService.project?.id);
  }
}
