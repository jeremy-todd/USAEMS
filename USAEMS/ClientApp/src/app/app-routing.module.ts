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
import { GateCountAdminComponent } from './Modules/GateCountReporting/gatecount-admin/gatecount-admin.component';
import { GateCountGateCountComponent } from './Modules/GateCountReporting/gatecount-gatecount/gatecount-gatecount.component';
import { GateCountStudentCountComponent } from './Modules/GateCountReporting/gatecount-studentcount/gatecount-studentcount.component';
import { GateCountIntervalComponent } from './Modules/GateCountReporting/gatecount-interval/gatecount-interval.component';
import { GateCountDistributionComponent } from './Modules/GateCountReporting/gatecount-distribution/gatecount-distribution.component';
import { GateCountReviewComponent } from './Modules/GateCountReporting/gatecount-review/gatecount-review.component';
import { GateCountStatsComponent } from './Modules/GateCountReporting/gatecount-stats/gatecount-stats.component';
import { IncidentDistributionComponent } from './Modules/IncidentReporting/incident-distribution/incident-distribution.component';
import { NotificationAdminComponent } from './Modules/EmployeeNotification/notification-admin/notification-admin.component';
import { NotificationNotificationComponent } from './Modules/EmployeeNotification/notification-notification/notification-notification.component';
import { NotificationDistributionComponent } from './Modules/EmployeeNotification/notification-distribution/notification-distribution.component';
import { ChecklistAdminComponent } from './Modules/ManagerChecklist/checklist-admin/checklist-admin.component';
import { ChecklistChecklistComponent } from './Modules/ManagerChecklist/checklist-checklist/checklist-checklist.component';
import { ChecklistManagersComponent } from './Modules/ManagerChecklist/checklist-managers/checklist-managers.component';
import { ChecklistDistributionComponent } from './Modules/ManagerChecklist/checklist-distribution/checklist-distribution.component';
import { ChecklistReviewComponent } from './Modules/ManagerChecklist/checklist-review/checklist-review.component';
import { SeatingAdminComponent } from './Modules/SeatingGuides/seating-admin/seating-admin.component';
import { SeatingAthleticsComponent } from './Modules/SeatingGuides/seating-athletics/seating-athletics.component';
import { SeatingSpecialEventsComponent } from './Modules/SeatingGuides/seating-specialevents/seating-specialevents.component';
import { SeatingSuitesComponent } from './Modules/SeatingGuides/seating-suites/seating-suites.component';
import { SeatingOpenSuitesComponent } from './Modules/SeatingGuides/seating-opensuites/seating-opensuites.component';
import { SeatingNewComponent } from './Modules/SeatingGuides/seating-new/seating-new.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent},
  { path: "userProfile", component: UserProfileComponent },
  { path: "profile", component: MyProfileComponent },
  { path: "register", component: RegisterComponent },
  { path: "incidents", component: IncidentsAdminComponent },
  { path: "incidentDistribution", component: IncidentDistributionComponent }
  { path: "incidentReport", component: IncidentReportComponent },
  { path: "incidentReview", component: IncidentReviewComponent },
  { path: "events", component: EventAdminComponent },
  { path: "login", component: LoginComponent },
  { path: "gatecount", component: GateCountAdminComponent },
  { path: "gcGateCount", component: GateCountGateCountComponent },
  { path: "gcStudentCount", component: GateCountStudentCountComponent },
  { path: "gcInterval", component: GateCountIntervalComponent },
  { path: "gcDistribution", component: GateCountDistributionComponent },
  { path: "gcReview", component: GateCountReviewComponent },
  { path: "gcStats", component: GateCountStatsComponent },
  { path: "notification", component: NotificationAdminComponent },
  { path: "nNotification", component: NotificationNotificationComponent },
  { path: "nDistribution", component: NotificationDistributionComponent },
  { path: "checklists", component: ChecklistAdminComponent },
  { path: "cChecklist", component: ChecklistChecklistComponent },
  { path: "cManagers", component: ChecklistManagersComponent },
  { path: "cDistribution", component: ChecklistDistributionComponent },
  { path: "cReview", component: ChecklistReviewComponent },
  { path: "seatingguides", component: SeatingAdminComponent },
  { path: "sgAthletics", component: SeatingAthleticsComponent },
  { path: "sgSpecialEvents", component: SeatingSpecialEventsComponent },
  { path: "sgSuites", component: SeatingSuitesComponent },
  { path: "sgOpenSuites", component: SeatingOpenSuitesComponent },
  { path: "sgNew", component: SeatingNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
