import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ProfiledeacGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to leave this page');
  }
  
}
