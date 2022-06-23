import { Component, Input, OnInit } from '@angular/core';
import { mockSkills } from 'src/app/data/mock-data';
import { Skill } from 'src/app/models/skill.model';
import { User } from 'src/app/models/user.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.scss'],
})
export class ProfilecardComponent implements OnInit {
  loggedInUser: User;

  // Get skills user has, to display in list on profile
  get skillsUser(): Skill[] {
    return this.skillService.skillsUser;
  }

  constructor(private skillService: SkillService) {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('user') || '{}');
    // Gets all skills user has from the database
    this.skillService.getAllSkillsForUser();
  }

  ngOnInit(): void {}
}
