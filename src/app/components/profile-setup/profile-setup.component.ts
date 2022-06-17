import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss'],
})
export class ProfileSetupComponent implements OnInit {
  createUserForm = new FormControl('');
  userEmail: string | undefined;

  hidden: boolean | undefined;
  showRequiredFields = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userEmail = JSON.parse(sessionStorage.getItem('email') || '{}');
  }

  onSubmit(form: NgForm) {
    if (form.value.hidden === undefined) {
      this.showRequiredFields = true;
    } else {
      if (form.value.hidden === 'true') {
        this.showRequiredFields = false;
        form.value.hidden = true;
      }
      if (form.value.hidden === 'false') {
        this.showRequiredFields = false;
        form.value.hidden = false;
      }
      console.log('Submitted: ', form.value);
      this.userService.createUser(form.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: () => {},
        complete: () => {},
      });
    }
  }
}
