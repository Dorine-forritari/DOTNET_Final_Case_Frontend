import { Component, Input, OnInit } from '@angular/core';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  @Input() projects: Project[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchInput']) {
        this.projects = mockProjects.filter(project => project.title.toLowerCase().includes(params['searchInput'].toLowerCase()));
      } else {
        this.projects = mockProjects;
      }
    })
  }

}
