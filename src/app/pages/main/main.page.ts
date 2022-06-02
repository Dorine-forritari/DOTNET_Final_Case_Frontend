import { Project } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  catalogue: Project[] = [];

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.fetchCatalogue();
  }

  public fetchCatalogue(): void {
    this.catalogueService.catalogue().subscribe({
      next: (response: any) => {
        console.log(response);
        this.catalogue = response.map((item: Project) => {
          console.log(item);
          return {
            ...item,
          };
        });
      },
      error: () => {},
      complete: () => {},
    });
  }
}
