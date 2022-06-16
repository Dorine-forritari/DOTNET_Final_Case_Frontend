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
  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  constructor(
    private catalogueService: CatalogueService,
    public auth: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log(this.userService.user);

    this.auth.user$.subscribe((profile) => {
      if (profile !== null) {
        // sessionStorage.setItem('userEmail', JSON.stringify(profile?.email));
        this.userService.fetchUserBasedOnEmail(profile?.email);
      }
    });
    this.catalogueService.fetchCatalogue();
  }
}
