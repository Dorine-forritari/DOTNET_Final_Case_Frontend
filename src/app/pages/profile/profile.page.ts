import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit(): void {}

  goToEditProfile() {
    this.router.navigate(['profile-edit']);
  }
}
