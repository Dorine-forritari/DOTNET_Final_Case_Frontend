import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserResponse } from '../models/user.model';

const { mockUserApiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Properties
  private _user?: User;

  // Getter and setter

  get user(): User | undefined{

    return this._user;
  }

  set user(user: User | undefined){

    if(!user){
      throw new Error ("The user is undefined.");
    }

    sessionStorage.setItem("user", JSON.stringify(user));
    this._user = user;

  }

  // Storing the user
  constructor(private http : HttpClient) {

    const storedUser = sessionStorage.getItem("user");
    if(storedUser){

      // Convert it back to an object.
      this._user = JSON.parse(storedUser);
    }

  }

  // Fetch user
  public fetchUser(userId: number): void {
    this.http
      .get<UserResponse[]>(mockUserApiUrl + '/' + userId)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: () => {},
        complete: () => {},
      });
    }
}