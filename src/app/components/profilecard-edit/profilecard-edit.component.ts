import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { mockSkills, mockUsers } from 'src/app/data/mock-data';
import { Skill } from 'src/app/models/skill.model';
import { User } from 'src/app/models/user.model';
import { SkillService } from 'src/app/services/skill.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profilecard-edit',
  templateUrl: './profilecard-edit.component.html',
  styleUrls: ['./profilecard-edit.component.scss'],
})
export class ProfilecardEditComponent implements OnInit {
  @Input() loggedInUser: User = this.userService.user!;
  @Input() loggedInUserSkills: Skill[] = [];

  hidden: string = '';

  // Get skills for dropdown menu (skills user can choose from)
  get skills(): Skill[] {
    return this.skillService.skills;
  }

  // Get skills user already has
  get skillsUser(): Skill[] {
    return this.skillService.skillsUser;
  }

  constructor(private router: Router, private userService: UserService, private skillService: SkillService) {
    this.SetRadioButton();
    // Fetches skills from database and removes skills that user already has
    this.skillService.fetchAllSkills(); 
    // Fetches skills from database that user already has
    this.skillService.getAllSkillsForUser();
  }

  ngOnInit(): void {}

  SetRadioButton() {
    if (this.loggedInUser.hidden === false) {
      this.checkit('unhidden');
    } else {
      this.checkit('hidden');
    }
  }

  DeleteSkill(skill: Skill) {
    for (let i = 0; i < this.skillsUser.length; i++) {
      if (skill.skillId === this.skillsUser[i].skillId) {
        this.skillService.deleteSkillUser(this.skillsUser[i].skillId, this.userService.user!.userId).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: () => {},
          complete: () => {
            this.skillService.fetchAllSkills();
            this.skillService.getAllSkillsForUser();
          },
        });
      }
    }
  }

  checkit(value: string) {
    this.hidden = value;
  }

  refreshComponent() {
    console.log('I am refreshing now');
    window.location.reload();
  }

  changeHidden(e: any) {
    console.log(e.target.value);
    if (e.target.value === 'hidden') {
      this.loggedInUser.hidden = true;
      console.log('Hidden is now: ' + this.loggedInUser.hidden);
    } else {
      this.loggedInUser.hidden = false;
      console.log('Hidden is now: ' + this.loggedInUser.hidden);
    }
  }

  AddSkillToUser(value: string) {
    console.log("selecting skill...");
    console.log(value);
    for (let i = 0; i < this.skills.length; i++) {
      if (value === this.skills[i].name) {
        console.log("skill id: " + this.skills[i].skillId);
        console.log("user id: " + this.userService.user!.userId);
        this.skillService.addSkillUser(this.skills[i].skillId, this.userService.user!.userId).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: () => {},
          complete: () => {
            this.skillService.fetchAllSkills();
            this.skillService.getAllSkillsForUser();
          },
        });
      }
    }
  }

  public onStartSubmit(form: NgForm) {
    this.loggedInUser.portfolio = form.value.portfolio;
    this.loggedInUser.description = form.value.description;
    this.loggedInUser.name = form.value.name;
    console.log(this.loggedInUser);
    this.userService
      .updateUser(this.loggedInUser.userId, this.loggedInUser)
      .subscribe({
        next: (user: User) => {
          this.userService.user = user;
        },
        error: () => {},
        complete: () => {},
      });
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }
}
