import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentComponent } from './student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentdeacGuard implements CanDeactivate<StudentComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to leave this page');
  }
  
}
