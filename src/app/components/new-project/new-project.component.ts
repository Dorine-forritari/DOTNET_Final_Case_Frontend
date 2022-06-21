import { CatalogueService } from 'src/app/services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  createNewProjectForm = new FormControl('');
  progressList = ['Founding', 'In progress', 'Stalled', 'Completed'];
  industryList = ['Music', 'Film', 'Game development', 'Web development'];

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.catalogueService.createNewProject(form.value);
  }
}
