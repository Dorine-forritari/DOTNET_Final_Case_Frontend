import { Component, Input, OnInit } from '@angular/core';
import { mockSkills, mockUsers } from 'src/app/data/mock-data';
import { Skill } from 'src/app/models/skill.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.scss']
})
export class ProfilecardComponent implements OnInit {

  //TODO!!! logged in user should not be nr 0 in mockuser array
  @Input() loggedInUser: User = mockUsers[1];
  @Input() loggedInUserSkills: Skill[];
  //TODO!!! all skills should come from API
  allSkills: Skill[] = mockSkills;
  
  constructor() { 
    this.loggedInUserSkills = [];
    //get the skill names of the logged in user
    this.getSkillNames();
  }
  
  getSkillNames(): void {
    for(let i = 0; i < this.loggedInUser.skills.length; i++){
      for(let j = 0; j < this.allSkills.length; j++){
        if(this.loggedInUser.skills[i] == this.allSkills[j].id){
          this.loggedInUserSkills.push(this.allSkills[j]);
          break;
        }
      }
    }
    
  }

  ngOnInit(): void {
  }

}
