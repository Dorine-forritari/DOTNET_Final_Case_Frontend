import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { mockSkills } from 'src/app/data/mock-data';
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
  // projectSkills: Skill[] = [];

  constructor() {
    setTimeout(() => {
      this.getSkillNames();
    }, 100);
  }

  getSkillNames(): void {
    // console.log(this.projects);
    this.projects.map((project) => {
      console.log(project.skills);
      project.skills.forEach((element) => {
        console.log(element);
        const found = this.allSkills.find((e) => e === element);
        console.log(found);
      });

      // for (let i = 0; i < element.skills.length; i++) {
      //   console.log(element.skills);
      // }
    });
    //     for (let i = 0; i < e.skills.length; i++) {
    //       for (let j = 0; j < this.allSkills.length; j++) {
    //         if (e.skills[i] == this.allSkills[j].id) {
    //           this.projectSkills.push(this.allSkills[j]);
    //           break;
    //         }
    //       }
  }

  ngOnInit(): void {}
}
