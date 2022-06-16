import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { User, UserResponse } from '../models/user.model';

const { usersApiUrl } = environment;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Properties
  private _user?: User;
  loggedIn: boolean = false;

  // Getter and setter
  get user(): User | undefined {
    return this._user;
  }

  set user(user: User | undefined) {
    if (!user) {
      throw new Error('The user is undefined.');
    }

    sessionStorage.setItem('user', JSON.stringify(user));
    this._user = user;
  }

  // Storing the user
  constructor(private http: HttpClient, private router: Router) {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      // Convert it back to an object.
      this._user = JSON.parse(storedUser);
    }
  }

  // Fetch all users
  public fetchAllUsers(): void {
    this.http.get<User[]>(usersApiUrl).subscribe({
      next: (response) => {
        console.log(response);
        response.map((e: User) => {
          // e.email
          console.log(e.email);
        });
      },
      error: () => {},
      complete: () => {},
    });
  }

  // Fetch all users
  public fetchUserBasedOnEmail(email: string | undefined): void {
    this.http.get<User[]>(usersApiUrl).subscribe({
      next: (response) => {
        const foundUser = response.find((user) => {
          if (user.email === email) {
            return user;
          } else {
            this.router.navigate(['profile-setup']);
            return 'User not found';
          }
        });
        sessionStorage.setItem('user', JSON.stringify(foundUser));
      },
      error: () => {},
      complete: () => {},
    });
  }

  // Fetch user
  public fetchUser(userId: number): void {
    this.http.get<UserResponse[]>(usersApiUrl + '/' + userId).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
