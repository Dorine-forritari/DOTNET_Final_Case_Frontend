import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  @Input() projects: Project[] = [];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {}

  // map projects
  goToProject(project: any) {
    this.projectService.project = project;
    this.router.navigate(['project']);
  }
}
