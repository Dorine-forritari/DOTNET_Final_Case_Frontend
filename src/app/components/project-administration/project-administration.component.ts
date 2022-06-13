import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.component.html',
  styleUrls: ['./project-administration.component.scss'],
})
export class ProjectAdministrationComponent implements OnInit {
  createProjectForm = new FormControl('');
  selectedProject: Project | undefined;

  constructor() {}

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );

    // this.currentProject = this.projectService.project;
  }

  onSubmit(form: NgForm) {
    console.log('Submitted: ', form.value);
  }
}
