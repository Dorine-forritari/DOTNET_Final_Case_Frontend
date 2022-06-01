import { Component, Input, OnInit } from '@angular/core';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  @Input() projects: Project[] = mockProjects;

  constructor() { }

  ngOnInit(): void {
  }

}
