import { Project } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue=page',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.catalogueService.fetchCatalogue();
  }
}
