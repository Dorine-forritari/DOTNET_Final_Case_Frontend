import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

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

  get project(): Project | undefined {
    return this.projectService.project;
  }

  constructor(private projectService: ProjectService) {}

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
}
