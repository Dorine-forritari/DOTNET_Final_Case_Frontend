import { Component, Input, OnInit } from '@angular/core';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    // Load projects
    this.catalogueService.fetchCatalogue();
  }
}
