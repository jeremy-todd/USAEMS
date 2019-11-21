import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './Modules/Admin/user-profile/user-profile.component';
import { IncidentsAdminComponent } from './Modules/IncidentReporting/incident-admin/incident-admin.component';
import { IncidentReportComponent } from './Modules/IncidentReporting/incident-report/incident-report.component';
import { IncidentReviewComponent } from './Modules/IncidentReporting/incident-review/incident-review.component';
import { EventAdminComponent } from './Modules/Events/event-admin/event-admin.component';
import { HeaderComponent } from './Modules/Admin/header/header.component';
import { FooterComponent } from './Modules/Admin/footer/footer.component';
import { RegisterComponent } from './Modules/Admin/register/register.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './Modules/Admin/my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Modules/Admin/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Helpers/jwt.interceptor';
import { ErrorInterceptor } from './Helpers/error.interceptor';
import { AuthService } from './Services/Admin/auth-service.service';
import { GateCountAdminComponent } from './Modules/GateCountReporting/gatecount-admin/gatecount-admin.component';
import { GateCountDistributionComponent } from './Modules/GateCountReporting/gatecount-distribution/gatecount-distribution.component';
import { GateCountGateCountComponent } from './Modules/GateCountReporting/gatecount-gatecount/gatecount-gatecount.component';
import { GateCountIntervalComponent } from './Modules/GateCountReporting/gatecount-interval/gatecount-interval.component';
import { GateCountReviewComponent } from './Modules/GateCountReporting/gatecount-review/gatecount-review.component';
import { GateCountStatsComponent } from './Modules/GateCountReporting/gatecount-stats/gatecount-stats.component';
import { GateCountStudentCountComponent } from './Modules/GateCountReporting/gatecount-studentcount/gatecount-studentcount.component';
import { IncidentDistributionComponent } from './Modules/IncidentReporting/incident-distribution/incident-distribution.component';
import { NotificationAdminComponent } from './Modules/EmployeeNotification/notification-admin/notification-admin.component';
import { NotificationDistributionComponent } from './Modules/EmployeeNotification/notification-distribution/notification-distribution.component';
import { NotificationNotificationComponent } from './Modules/EmployeeNotification/notification-notification/notification-notification.component';
import { ChecklistAdminComponent } from './Modules/ManagerChecklist/checklist-admin/checklist-admin.component';
import { ChecklistChecklistComponent } from './Modules/ManagerChecklist/checklist-checklist/checklist-checklist.component';
import { ChecklistManagersComponent } from './Modules/ManagerChecklist/checklist-managers/checklist-managers.component';
import { ChecklistDistributionComponent } from './Modules/ManagerChecklist/checklist-distribution/checklist-distribution.component';
import { ChecklistReviewComponent } from './Modules/ManagerChecklist/checklist-review/checklist-review.component';
import { SeatingAdminComponent } from './Modules/SeatingGuides/seating-admin/seating-admin.component';
import { SeatingAthleticsComponent } from './Modules/SeatingGuides/seating-athletics/seating-athletics.component';
import { SeatingNewComponent } from './Modules/SeatingGuides/seating-new/seating-new.component';
import { SeatingOpenSuitesComponent } from './Modules/SeatingGuides/seating-opensuites/seating-opensuites.component';
import { SeatingSpecialEventsComponent } from './Modules/SeatingGuides/seating-specialevents/seating-specialevents.component';
import { SeatingSuitesComponent } from './Modules/SeatingGuides/seating-suites/seating-suites.component';
import { SignUpAdminComponent } from './Modules/StaffSignUp/signup-admin/signup-admin.component';
import { SignUpEMailListComponent } from './Modules/StaffSignUp/signup-emaillist/signup-emaillist.component';
import { SignUpManageEventsComponent } from './Modules/StaffSignUp/signup-manage/signup-manage.component';
import { SignUpMyEventsComponent } from './Modules/StaffSignUp/signup-myevents/signup-myevents.component';
import { SignUpPermissionsComponent } from './Modules/StaffSignUp/signup-permissions/signup-permissions.component';
import { SignUpReviewStaffingComponent } from './Modules/StaffSignUp/signup-reviewstaffing/signup-reviewstaffing.component';
import { SignUpSignUpComponent } from './Modules/StaffSignUp/signup-signup/signup-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    IncidentsAdminComponent,
    IncidentDistributionComponent,
    IncidentReportComponent,
    IncidentReviewComponent,
    EventAdminComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    MyProfileComponent,
    LoginComponent,
    GateCountAdminComponent,
    GateCountDistributionComponent,
    GateCountGateCountComponent,
    GateCountIntervalComponent,
    GateCountReviewComponent,
    GateCountStatsComponent,
    GateCountStudentCountComponent,
    NotificationAdminComponent,
    NotificationDistributionComponent,
    NotificationNotificationComponent,
    ChecklistAdminComponent,
    ChecklistChecklistComponent,
    ChecklistManagersComponent,
    ChecklistDistributionComponent,
    ChecklistReviewComponent,
    SignUpAdminComponent,
    SignUpEMailListComponent,
    SignUpManageEventsComponent,
    SignUpMyEventsComponent,
    SignUpPermissionsComponent,
    SignUpReviewStaffingComponent,
    SignUpSignUpComponent,
    SeatingAdminComponent,
    SeatingAthleticsComponent,
    SeatingNewComponent,
    SeatingOpenSuitesComponent,
    SeatingSpecialEventsComponent,
    SeatingSuitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
