import { LiteralExpr } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-other-user-profile',
  templateUrl: './see-other-user-profile.component.html',
  styleUrls: ['./see-other-user-profile.component.scss']
})
export class SeeOtherUserProfileComponent implements OnInit {

  //TODO!!! the user should come from the API
  selectedUser: User | undefined;
  
  constructor( private router: Router) {

   }

  ngOnInit(): void {
    this.selectedUser = JSON.parse(
      sessionStorage.getItem('user') || '{}');
  }

}
