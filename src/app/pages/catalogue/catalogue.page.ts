import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Project } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-catalogue=page',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  // On initializing the CataloguePage all Industry checkboxes are checked (projects of all industries are shown)
  filter = {
    music: true,
    film: true,
    gamedevelopment: true,
    webdevelopment: true,
  };

  // List of all projects currently in database
  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  // List of projects that changes based on filtering by Industry.
  get projectsForCatalogue(): Project[] {
    return this.catalogueService.projectsForCatalogue;
  }

  // List of matching projects for a certain user (user has skills that are needed for project)
  get matchingProjects(): Project[] {
    return this.catalogueService.matchingProjects;
  }

  // List of matching projects that changes based on filtering by Industry.
  get matchingProjectsForCatalogue(): Project[] {
    return this.catalogueService.matchingProjectsForCatalogue;
  }

  constructor(
    private catalogueService: CatalogueService,
    public auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      if (profile !== null) {
        this.userService.fetchUserBasedOnEmail(profile?.email);
      }
    });
    this.catalogueService.fetchCatalogue();
    if (this.userService.user) {
      this.catalogueService.fetchMatchingProjects(this.userService.user.userId);
    }
  }

  // Filters projects based on change events for the Industry check-boxes.
  // The result is stored in 'projectsForCatalogue', so 'projects' always keeps the full list of projects.
  filterProjects() {
    this.catalogueService.projectsForCatalogue = this.projects.filter(
      (x) =>
        (x.industry.toLowerCase() === 'music' && this.filter.music) ||
        (x.industry.toLowerCase() === 'film' && this.filter.film) ||
        (x.industry.toLowerCase() === 'game development' &&
          this.filter.gamedevelopment) ||
        (x.industry.toLowerCase() === 'web development' &&
          this.filter.webdevelopment)
    );
    if (this.userService.user) {
      this.catalogueService.matchingProjectsForCatalogue = this.matchingProjects.filter(x => 
        (x.industry.toLowerCase() === 'music' && this.filter.music)
        || (x.industry.toLowerCase() === 'film' && this.filter.film)
        || (x.industry.toLowerCase() === 'game development' && this.filter.gamedevelopment)
        || (x.industry.toLowerCase() === 'web development' && this.filter.webdevelopment)
      );
    }
  }

  newProject() {
    this.router.navigate(['new-project']);
  }
}
