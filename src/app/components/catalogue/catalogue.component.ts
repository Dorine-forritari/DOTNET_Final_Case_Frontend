import { CatalogueService } from 'src/app/services/catalogue.service';
import { mockSkills } from 'src/app/data/mock-data';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  @Input() projects: Project[] = [];
  // //TODO!!! all skills should come from API
  allSkills: Skill[] = mockSkills;

  constructor(
    private router: Router,
    private catalogueService: CatalogueService
  ) {
    setTimeout(() => {
      this.getSkillNames();
    }, 500);
  }

  getSkillNames(): void {
    this.projects.map((project) => {
      for (let i = 0; i < project.skills.length; i++) {
        const found = this.allSkills.find((e) => e.id === project.skills[i]);
        project.skills.splice(i, 1, found?.name);
      }
    });
    console.log(this.projects);
    this.catalogueService.projects = this.projects;
  }

  ngOnInit(): void {}

  // map projects

  goToProject(project: any) {
    this.router.navigate(['project', project.id]);
  }
}
