import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './Modules/Admin/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Modules/Admin/register/register.component';
import { MyProfileComponent } from './Modules/Admin/my-profile/my-profile.component';
import { IncidentsAdminComponent } from './Modules/IncidentReporting/incident-admin/incident-admin.component';
import { IncidentReportComponent } from './Modules/IncidentReporting/incident-report/incident-report.component';
import { IncidentReviewComponent } from './Modules/IncidentReporting/incident-review/incident-review.component';
import { EventAdminComponent } from './Modules/Events/event-admin/event-admin.component';
import { LoginComponent } from './Modules/Admin/login/login.component';


const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"home", component: HomeComponent},
  { path:"userProfile", component: UserProfileComponent },
  { path:"profile", component: MyProfileComponent },
  { path:"register", component: RegisterComponent },
  { path:"incidents", component: IncidentsAdminComponent},
  { path:"incidentReport", component: IncidentReportComponent },
  { path:"incidentsReview", component: IncidentReviewComponent },
  { path:"events", component: EventAdminComponent },
  { path:"login", component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
