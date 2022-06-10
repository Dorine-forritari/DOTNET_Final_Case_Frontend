import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  selectedProject: Project | undefined;
  selectedIndustry: string | undefined;

  get project(): Project | undefined {
    return this.projectService.project;
  }

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
    this.selectedIndustry = this.selectedProject?.industry.toLowerCase();

    if (this.selectedIndustry === 'web development') {
      this.selectedIndustry = 'globe';
    } else if (this.selectedIndustry === 'music') {
      this.selectedIndustry = 'music-note-beamed';
    } else if (this.selectedIndustry === 'movie') {
      this.selectedIndustry = 'camera-reels';
    } else if (this.selectedIndustry === 'game development') {
      this.selectedIndustry = 'joystick';
    } else {
      this.selectedIndustry = 'file-earmark';
    }
  }

  // Update a project. This is only for the user administrator
  goToProjectAdministration() {
    this.router.navigate(['project/administration']);
  }
}
