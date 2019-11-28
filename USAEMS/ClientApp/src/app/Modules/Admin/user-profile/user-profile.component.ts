import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../Interfaces/Admin/iuser';
import { UserServiceService } from '../../../Services/Admin/user-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;

  userList: IUser[] = [];

  constructor(private UserService: UserServiceService) { }

  ngOnInit() {
    this.UserService.getAll().subscribe(data => (this.userList = data));
    console.log(this.userList);
  }

}
