import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {

  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  // Store projects from catalogue in variable filteredProjects
  // This variable can be used to filter projects by search term
  filteredProjects: Project[] = this.projects;

  // If no projects are found, searchPageMessage is set to noProjectsFound
  searchPageMessage: string = "";
  noProjectsFound: string = "No projects found. Please try again with another search term.";
  
  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Fetch all projects from API
    this.catalogueService.fetchCatalogue();
    // Filter projects based on search input in params
    this.route.params.subscribe(params => {
      if (params['searchInput']) {
        this.filteredProjects = this.projects.filter(function(p) {
          return (p.title.toLowerCase().includes(params['searchInput'].toLowerCase()) ||
                  p.theme.toLowerCase().includes(params['searchInput'].toLowerCase()) ||
                  p.description.toLowerCase().includes(params['searchInput'].toLowerCase()));
        });
        if (this.filteredProjects.length === 0) {
          this.searchPageMessage = this.noProjectsFound;
        } else {
          this.searchPageMessage = "";
        }
      } 
    })
  }
}
