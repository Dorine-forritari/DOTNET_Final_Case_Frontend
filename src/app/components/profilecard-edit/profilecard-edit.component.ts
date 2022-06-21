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
  //userId : number;
  //TODO!!! logged in user should not be nr 0 in mockuser array
  // @Input() loggedInUser: User = mockUsers[1];
  @Input() loggedInUser: User = this.userService.user!;
  // @Input() loggedInUserSkills: Skill[];
  @Input() loggedInUserSkills: Skill[] = [];
  //TODO!!! all skills should come from API
  allSkills: Skill[] = mockSkills;
  @Input() remainingSkills: Skill[] = mockSkills;

  hidden: string = '';

  get skills(): Skill[] {
    return this.skillService.skills;
  }

  constructor(private router: Router, private userService: UserService, private skillService: SkillService) {
    // this.loggedInUserSkills = [];
    // //get the skill names of the logged in user
    // this.getSkillNames();
    // this.SetRadioButton();
    
  }

  ngOnInit(): void {
    this.skillService.fetchAllSkills();
  }

  getSkillNames(): void {
    for (let i = 0; i < this.loggedInUser.skills.length; i++) {
      for (let j = 0; j < this.allSkills.length; j++) {
        if (this.loggedInUser.skills[i] == this.allSkills[j].id) {
          this.loggedInUserSkills.push(this.allSkills[j]);
          this.RemoveElementFromArray(this.allSkills[j].id);
          break;
        }
      }
    }
  }

  RemoveElementFromArray(element: number) {
    this.remainingSkills.forEach((value, index) => {
      if (value.id == element) this.remainingSkills.splice(index, 1);
    });
  }

  SetRadioButton() {
    if (this.loggedInUser.hidden === false) {
      this.checkit('unhidden');
    } else {
      this.checkit('hidden');
    }
  }

  DeleteSkill(skill: Skill) {
    for (let i = 0; i < this.loggedInUser.skills.length; i++) {
      if (skill.id === this.loggedInUser.skills[i]) {
        console.log(
          'skill id ' + this.loggedInUser.skills[i] + ' has been deleted'
        );
        this.loggedInUser.skills.splice(i, 1);
        this.refreshComponent();
        break;
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

  // AddSkillToUser(value: string) {
  //   for (let i = 0; i < this.remainingSkills.length; i++) {
  //     if (value === this.remainingSkills[i].name) {
  //       this.loggedInUser.skills.push(this.remainingSkills[i].id);
  //       this.RemoveElementFromArray(i);
  //       this.refreshComponent();
  //       break;
  //     }
  //   }
  // }
  public async AddSkillToUser(value: string) {
    for (let i = 0; i < this.skills.length; i++) {
      if (value === this.skills[i].name) {
        await this.skillService.addSkillUser(this.skills[i].id, this.userService.user!.userId);
        this.skillService.fetchAllSkills();
        this.refreshComponent();
        break;
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
