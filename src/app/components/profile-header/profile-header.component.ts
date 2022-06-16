import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  username: string | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.user?.name;
  }
}
