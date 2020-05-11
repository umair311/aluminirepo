import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import {HomeComponent} from './home/home.component'

@Injectable({
  providedIn: 'root'
})
export class HomedeacGuard implements CanDeactivate<HomeComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to leave this page');
   
  }
  
}
