import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.scss'],
})
export class ProjectIconComponent implements OnInit {
  @Input() industry: string | undefined;
  icon: string | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.industry === 'Web development') {
      this.industry = 'globe';
    } else if (this.industry === 'Music') {
      this.industry = 'music-note-beamed';
    } else if (this.industry === 'Movie') {
      this.industry = 'camera-reels';
    } else if (this.industry === 'Game development') {
      this.industry = 'joystick';
    } else {
      this.industry = 'file-earmark';
    }
  }
}
