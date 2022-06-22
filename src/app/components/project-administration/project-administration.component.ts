import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.component.html',
  styleUrls: ['./project-administration.component.scss'],
})
export class ProjectAdministrationComponent implements OnInit {
  isSubmitted = false;
  createProjectForm = new FormControl('');
  selectedProject: Project | undefined;

  progressList = ['Founding', 'In progress', 'Stalled', 'Completed'];

  constructor() {}

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
    console.log(this.selectedProject);
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  changeStatus(e: any) {
    console.log(e.target.value);
  }
}
