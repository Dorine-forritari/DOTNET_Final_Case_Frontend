import { CatalogueService } from 'src/app/services/catalogue.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  title: string = 'Example project';
  industry: string = 'Web development';
  theme: string = '';
  skills: any = [{ name: 'piano' }];

  constructor(
    private route: ActivatedRoute,
    private catalogueService: CatalogueService
  ) {}

  // ngOnInit(): void {
  //   console.log(this.route.snapshot.queryParamMap.get('id'));
  //   const projectId: number = Number(
  //     this.route.snapshot.queryParamMap.get('id')
  //   );
  //   this.catalogueService.getSingleProject(projectId);
  // }

  ngOnInit(): void {}
}
