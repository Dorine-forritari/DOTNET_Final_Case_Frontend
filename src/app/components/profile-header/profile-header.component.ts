import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  loggedIn: boolean = false;
  username: string | undefined;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loggedIn = this.userService.checkUserIsLoggedIn();
    this.username = this.userService.user?.name;
  }

  goToEditProfile() {
    this.router.navigate(['profile-edit']);
  }
}
