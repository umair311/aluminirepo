import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class SignupdeacGuard implements CanDeactivate<SignupComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to leave this page');
  }
  
}
