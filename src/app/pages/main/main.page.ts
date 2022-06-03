import { Component, Input, OnInit } from '@angular/core';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    // Load projects
    this.projects = mockProjects;
  }
}
