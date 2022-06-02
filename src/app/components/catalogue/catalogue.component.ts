import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
// import { mockProjects } from 'src/app/data/mock-data';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  // @Input() projects: Project[] = mockProjects;
  @Input() catalogue: Project[] = [];

  constructor() {}

  ngOnInit(): void {}
}
