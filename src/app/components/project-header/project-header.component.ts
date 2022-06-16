import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  selectedProject: Project | undefined;
  selectedIndustry: string | undefined;
  icon: string | undefined;
  loggedIn: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.setProjectIcon();
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn() {
    if (this.userService.user !== undefined) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  setProjectIcon() {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
    this.selectedIndustry = this.selectedProject?.industry.toLowerCase();

    if (this.selectedIndustry === 'web development') {
      this.icon = 'globe';
    } else if (this.selectedIndustry === 'music') {
      this.icon = 'music-note-beamed';
    } else if (this.selectedIndustry === 'movie') {
      this.icon = 'camera-reels';
    } else if (this.selectedIndustry === 'game development') {
      this.icon = 'joystick';
    } else {
      this.icon = 'file-earmark';
    }
  }

  // Update a project. This is only for the user administrator
  goToProjectAdministration() {
    this.router.navigate([
      `project/${this.selectedProject?.projectId}/administration`,
    ]);
  }
}
