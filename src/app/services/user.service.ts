import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { User, UserResponse } from '../models/user.model';
import { Observable } from 'rxjs';

const { usersApiUrl, apiKey } = environment;
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

  public checkUserIsLoggedIn(): boolean {
    if (this.user !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  // Fetch all users
  public fetchAllUsers(): void {
    this.http.get<User[]>(usersApiUrl).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: () => {},
      complete: () => {},
    });
  }

  // Fetch user with OAuth login
  public fetchUserBasedOnEmail(email: string | undefined): void {
    this.http.get<User[]>(usersApiUrl).subscribe({
      next: (response) => {
        response.find((user) => {
          if (user.email === email) {
            console.log('found');
            this.user = user;
          } else {
            console.log('not found');
          }
        });
        if (this.user === undefined) {
          sessionStorage.setItem('email', JSON.stringify(email));
          this.router.navigate(['profile-setup']);
        }
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

  // Update a user
  public updateUser(userId: number, user: User): Observable<User> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey,
    });

    return this.http.post<User>(
      usersApiUrl + '/' + userId,
      {
        name: user.name,
        email: user.email,
        portfolio: user.portfolio,
        description: user.description,
        hidden: user.hidden,
        skills: user.skills,
      },
      { headers }
    );
  }

  public createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey,
    });

    return this.http.patch<User>(usersApiUrl, user, { headers });
  }
}
