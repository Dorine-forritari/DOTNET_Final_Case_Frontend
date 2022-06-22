import { Component, Input, OnInit } from '@angular/core';
import { mockSkills } from 'src/app/data/mock-data';
import { Skill } from 'src/app/models/skill.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.scss'],
})
export class ProfilecardComponent implements OnInit {
  loggedInUser: User;
  @Input() loggedInUserSkills: Skill[];
  // TODO!!! all skills should come from API
  allSkills: Skill[] = mockSkills;

  constructor() {
    this.loggedInUserSkills = [];
    // Get the skill names of the logged in user
    // this.getSkillNames();
    this.loggedInUser = JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  getSkillNames(): void {
    for (let i = 0; i < this.loggedInUser.skills.length; i++) {
      for (let j = 0; j < this.allSkills.length; j++) {
        if (this.loggedInUser.skills[i] == this.allSkills[j].skillId) {
          this.loggedInUserSkills.push(this.allSkills[j]);
          break;
        }
      }
    }
  }

  ngOnInit(): void {}
}
