import { CatalogueService } from 'src/app/services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';

// ng-angular-popup
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  createNewProjectForm = new FormControl('');
  progressList = ['Founding', 'In progress', 'Stalled', 'Completed'];
  industryList = ['Music', 'Film', 'Game development', 'Web development'];

  constructor(
    private catalogueService: CatalogueService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {}
  
  // Show message when a project is successfully created
  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Project successfully created.',duration:5000});
  }

  onSubmit(form: NgForm) {
    this.catalogueService.createNewProject(form.value);
    this.showSuccess()
    this.router.navigate(['catalogue']);
  }
}
