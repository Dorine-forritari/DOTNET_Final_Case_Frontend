import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { mockProjects } from 'src/app/data/mock-data';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.component.html',
  styleUrls: ['./project-administration.component.scss'],
})
export class ProjectAdministrationComponent implements OnInit {
  isSubmitted = false;
  createProjectForm = new FormControl('');
  selectedProject: Project | undefined;

  statusList = ['Founding', 'In progress', 'Stalled', 'Completed'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedProject = JSON.parse(
      sessionStorage.getItem('project') || '{}'
    );
  }
  onSubmit(form: NgForm) {
    console.log('Submitted: ', form.value);
  }

  setStatus(event: any) {
    console.log(this.selectedProject);
    if (this.selectedProject?.progress === undefined) {
      throw new Error('Progress is undefined');
    }
    this.selectedProject.progress = event.target.value;
  }

  // Status form functions
  statusForm = this.fb.group({
    status: [''],
  });

  changeStatus(e: any) {
    console.log(e.target.value);

    this.status?.setValue(e.target.value, {
      onlySelf: true,
    });
    console.log(this.statusForm.value);
    console.log(this.status);
  }

  get status() {
    return this.statusForm.get('status');
  }
}
