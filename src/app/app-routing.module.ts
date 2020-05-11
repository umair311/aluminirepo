import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomedeacGuard } from './homedeac.guard';
import { TeacherdeacGuard } from './teacherdeac.guard';
import { ProfiledeacGuard } from './profiledeac.guard';
import { AluminideacGuard } from './aluminideac.guard';
import { EventsdeacGuard } from './eventsdeac.guard';
import { SignupdeacGuard } from './signupdeac.guard';
import { StudentdeacGuard } from './studentdeac.guard';



const routes: Routes = [
  {
    path:'',component:HomeComponent,canDeactivate:[HomedeacGuard]
  },
  {
    path:'signup',component:SignupComponent,canDeactivate:[SignupdeacGuard]
  },
  {
    path:'event',component:EventComponent,canDeactivate:[EventsdeacGuard]
  },

{
  path:'student',component:StudentComponent,canDeactivate:[StudentdeacGuard]
},
{
  path:'teacher',component:TeacherComponent,canDeactivate:[TeacherdeacGuard]
},
{
  path:'profile',component:ProfileComponent,canDeactivate:[ProfiledeacGuard]
},
{
  path:'home',component:HomeComponent,canDeactivate:[HomedeacGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
