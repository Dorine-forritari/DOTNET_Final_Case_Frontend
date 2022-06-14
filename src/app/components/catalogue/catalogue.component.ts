import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  @Input() projects: Project[] = [];

  constructor(private router: Router, private userService: UserService) {
    // this.userService.fetchUsersBasedOnEmail();
  }

  async ngOnInit(): Promise<void> {
    // console.log('component: ' + sessionStorage.getItem('authUser'));
    await this.userService.fetchUsersBasedOnEmail();
  }

  goToProject(projectId: number) {
    this.router.navigate(['project', projectId]);
  }
}
