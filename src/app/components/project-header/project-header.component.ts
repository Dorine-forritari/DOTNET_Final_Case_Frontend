import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() industry: string | undefined;

  icon: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

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


  // Update a project. This is only for the user administrator
  onUpdateProject(){
    // TO DO Here we have to make the check of an user is an administrator.
      this.router.navigate(['projectadministration']);
  }
}
