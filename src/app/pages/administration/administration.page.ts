import { Component, OnInit } from '@angular/core';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss']
})
export class AdministrationPage implements OnInit {

  get projects(): Project[] {
    return this.catalogueService.projects;
  }
    
    constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
  
    // Load projects
    this.catalogueService.fetchCatalogue();
  
  }


}
