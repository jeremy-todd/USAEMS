import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../../Services/Admin/user-service.service';
import { IUser } from '../../../Interfaces/Admin/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      securityQuestion: [''],
      securityAnswer: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordRetype: ['', Validators.required],
      phone: [''],
      cellCarrier: [''],
      employer: ['', Validators.required],
      student: ['', Validators.required],
      technical: ['', Validators.required]
    });
  }

  register(newUser) {
    console.log('registerData.firstName = ' + newUser.firstName);
    this.userService.registerUser(newUser);
  }

}
