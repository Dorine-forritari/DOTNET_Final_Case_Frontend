import { Project } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue=page',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  projects: Project[] = [];

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.fetchCatalogue();
  }

  public fetchCatalogue(): void {
    this.catalogueService.catalogue().subscribe({
      next: (response: any) => {
        this.projects = response.map((project: Project) => {
          return {
            ...project,
          };
        });
      },
      error: () => {},
      complete: () => {},
    });
  }
}
