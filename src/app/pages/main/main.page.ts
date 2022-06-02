import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  
  projects: Project[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Filter projects based on search input in params
    this.route.params.subscribe(params => {
      if (params['searchInput']) {
        this.projects = mockProjects.filter(project => project.title.toLowerCase().includes(params['searchInput'].toLowerCase()));
      } else {
        this.projects = mockProjects;
      }
    })
  }

}
