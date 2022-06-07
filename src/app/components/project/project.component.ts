import { CatalogueService } from 'src/app/services/catalogue.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  title: string = '';
  industry: string = 'Web development';
  theme: string = '';
  skills: any = [{ name: 'piano' }];

  currentProject: any = localStorage.getItem('project');

  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  constructor(
    private route: ActivatedRoute,
    private catalogueService: CatalogueService
  ) {}

  ngOnInit(): void {
    // GET PROJECT ID FROM URL AND SEND TO CATALOGUESERVICE
    //   console.log(this.route.snapshot.queryParamMap.get('id'));
    //   const projectId: number = Number(
    //     this.route.snapshot.queryParamMap.get('id')
    //   );
    //   this.catalogueService.fetchProject(projectId);
    this.currentProject = this.projects.find(
      ({ id }) => id === Number(this.route.snapshot.queryParamMap.get('id'))
    );
    localStorage.setItem('project', JSON.stringify(this.currentProject));
  }
}
