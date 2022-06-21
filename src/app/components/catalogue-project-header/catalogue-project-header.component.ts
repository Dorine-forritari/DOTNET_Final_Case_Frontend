import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-catalogue-project-header',
  templateUrl: './catalogue-project-header.component.html',
  styleUrls: ['./catalogue-project-header.component.scss'],
})
export class CatalogueProjectHeaderComponent implements OnInit {
  loggedIn: boolean = false;

  @Input() title: string | undefined;
  @Input() industry: string | undefined;

  icon: string | undefined;

  currentProject: Project | undefined;

  constructor(private userService: UserService) {
    if (this.userService.user !== undefined) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {
    this.setProjectIcon();
  }

  setProjectIcon() {
    this.industry = this.industry?.toLowerCase();
    if (this.industry === 'web development') {
      this.icon = 'globe';
    } else if (this.industry === 'music') {
      this.icon = 'music-note-beamed';
    } else if (this.industry === 'film') {
      this.icon = 'camera-reels';
    } else if (this.industry === 'game development') {
      this.icon = 'joystick';
    } else {
      this.icon = 'file-earmark';
    }
  }
}
