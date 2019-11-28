import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../Interfaces/Admin/iuser';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from "../../../Services/Admin/auth-service.service";
import { UserServiceService } from "../../../Services/Admin/user-service.service";
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myProfileForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private AuthService: AuthService, private formBuilder: FormBuilder, private Router: Router, private UserService: UserServiceService) { }

  ngOnInit() {
    this.AuthService.currentUser.subscribe(
      (currentUser) => {
        this.myProfileForm = this.formBuilder.group({
          firstName: currentUser.user.firstName,
          lastName: currentUser.user.lastName,
          securityQuestion: currentUser.user.securityQuestion,
          securityAnswer: currentUser.user.securityAnswer,
          email: currentUser.user.email,
          cellPhone: currentUser.user.phoneNumber,
          cellCarrier: currentUser.user.carrierId,
          employer: currentUser.user.employerId,
          student: currentUser.user.student,
          technical: currentUser.user.technical,
          active: currentUser.user.active,
          id: currentUser.user.id
        })
      }
    )
  }

  user: IUser = {
    id: "",
    firstName: "",
    lastName: "",
    securityQuestion: 0,
    securityAnswer: "",
    email: "",
    phoneNumber: "",
    carrierId: 0,
    employerId: 0,
    student: false,
    technical: false,
    active: false
  }

  // covenience getter for easy access to form fields
  get f() { return this.myProfileForm.controls; }

  onSubmit(myProfileData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.myProfileForm.invalid) { return; }

    console.log("Submitted", myProfileData);
    //var updatedUser: IUser;
    /*updatedUser = ([
      updatedUser.firstName = myProfileData.firstName,
      updatedUser.lastName = myProfileData.lastName,
      updatedUser.securityQuestion = myProfileData.securityQuestion,
      updatedUser.securityAnswer = myProfileData.securityAnswer,
      updatedUser.email = myProfileData.email,
      updatedUser.phoneNumber = myProfileData.cellPhone,
      updatedUser.carrierId = myProfileData.cellCarrier,
      updatedUser.employerId = myProfileData.employer,
      updatedUser.student = myProfileData.student,
      updatedUser.technical = myProfileData.technical,
      updatedUser.active = myProfileData.active,
      updatedUser.id = myProfileData.id
    ])*/
    console.log(this.myProfileForm.value);
    this.UserService.updateUser(this.myProfileForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.Router.navigate(['/home']);
        },
        error => {
          this.error = error;
          this.Router.navigate(['/aMyProfile'], { queryParams: { error: true } }); console.log(error);
        });
  }
}
