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
  @Input() loggedInUser: User = mockUsers[0];
  @Input() skills: Skill[] = mockSkills;

  constructor() { }

  ngOnInit(): void {
  }

}
