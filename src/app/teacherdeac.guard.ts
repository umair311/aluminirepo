import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherComponent } from './teacher/teacher.component';

@Injectable({
  providedIn: 'root'
})
export class TeacherdeacGuard implements CanDeactivate<TeacherComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to leave this page');
  }
  
}
