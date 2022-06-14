import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationGuard implements CanActivate {
  
  
  constructor(private router:Router, private userService: UserService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      // Send the user to profile or project page
      if(this.userService.user){
      return true;
    }

    else{
      // Send the user to the Authenticator
      this.router.navigateByUrl("/main");
      return false;
    }
  }
  
}