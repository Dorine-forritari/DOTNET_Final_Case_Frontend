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

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.user === undefined) {
      console.log('undefined');
    }
    console.log(sessionStorage.getItem('userEmail'));

    // this.userService.fetchUserBasedOnEmail();
  }

  goToProject(projectId: number) {
    console.log(projectId);
    console.log(this.projects);

    this.router.navigate(['project', projectId]);
  }
}
