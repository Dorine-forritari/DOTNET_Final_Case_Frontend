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

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.projects);
    this.projects.map((project) => console.log(project));
  }

  // map projects

  goToProject(project: any) {
    this.router.navigate(['project'], { queryParams: { id: project.id } });
    // this.router.navigate(['project', this.projects.id]);
  }
}
