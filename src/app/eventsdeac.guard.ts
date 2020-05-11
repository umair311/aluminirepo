import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventComponent } from './event/event.component';

@Injectable({
  providedIn: 'root'
})
export class EventsdeacGuard implements CanDeactivate<EventComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to leave this page');
    
  }
  
}
