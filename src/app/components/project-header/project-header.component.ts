import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() industry: string | undefined;

  icon: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.industry = this.industry?.toLowerCase();
    if (this.industry === 'web development') {
      this.industry = 'globe';
    } else if (this.industry === 'music') {
      this.industry = 'music-note-beamed';
    } else if (this.industry === 'movie') {
      this.industry = 'camera-reels';
    } else if (this.industry === 'game development') {
      this.industry = 'joystick';
    } else {
      this.industry = 'file-earmark';
    }
  }

  // joinProject(): void {}
}
