import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Project } from 'src/app/models/project.model';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-project-page',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  // All projects
  get projects(): Project[] {
    return this.catalogueService.projects;
  }

  constructor(
    private route: ActivatedRoute,
    private catalogueService: CatalogueService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    const foundProject = this.projects.find((element) => {
      return element.projectId === Number(projectId);
    });
    sessionStorage.setItem('project', JSON.stringify(foundProject));

    // TODO: GET PROJECT ID FROM URL AND SEND TO CATALOGUE SERVICE
    //   console.log(this.route.snapshot.queryParamMap.get('id'));
    //   const projectId: number = Number(
    //     this.route.snapshot.queryParamMap.get('id')
    //   );
    //   this.catalogueService.fetchProject(projectId);
  }
}
