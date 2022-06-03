import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  @Input() title: string = '';
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
