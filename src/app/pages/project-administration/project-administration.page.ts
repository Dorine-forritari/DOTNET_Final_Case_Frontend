import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockProjects } from 'src/app/data/mock-data';
import { Project } from 'src/app/models/project.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.page.html',
  styleUrls: ['./project-administration.page.scss']
})
export class ProjectAdministrationPage implements OnInit {
 
  @Input() title: string | undefined;
  @Input() industry: string | undefined;

  currentProject: Project | undefined;
  
  get projects(): Project[] {

    return this.catalogueService.projects;
  }
    
    constructor(private catalogueService: CatalogueService,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    // Load projects
    this.currentProject = this.projects.find(
      ({ id }) => id === Number(this.route.snapshot.paramMap.get('id'))
    );
    sessionStorage.setItem(
      'selected project',
      JSON.stringify(this.currentProject)
    );
  }

}
