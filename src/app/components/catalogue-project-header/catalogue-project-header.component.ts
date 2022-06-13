import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
@Component({
  selector: 'app-catalogue-project-header',
  templateUrl: './catalogue-project-header.component.html',
  styleUrls: ['./catalogue-project-header.component.scss'],
})
export class CatalogueProjectHeaderComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() industry: string | undefined;

  icon: string | undefined;

  currentProject: Project | undefined;

  constructor() {}

  ngOnInit(): void {
    this.industry = this.industry?.toLowerCase();
    if (this.industry === 'web development') {
      this.icon = 'globe';
    } else if (this.industry === 'music') {
      this.icon = 'music-note-beamed';
    } else if (this.industry === 'movie') {
      this.icon = 'camera-reels';
    } else if (this.industry === 'game development') {
      this.icon = 'joystick';
    } else {
      this.icon = 'file-earmark';
    }
  }
}
