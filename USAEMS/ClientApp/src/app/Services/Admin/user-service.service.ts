import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/Admin/iuser';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IAuthResponse } from '../../Interfaces/Admin/iauth-response';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userList: BehaviorSubject<IAuthResponse>;

  constructor( private http: HttpClient ) { }

  private _url: string = "https://localhost:5001/api/AppUsers";

  //Get all Users
  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  //Add a User
  registerUser(newUser): Observable<IUser> {
    return this.http.post<IUser>(this._url, newUser);
  }

  //Update a User
  updateUser(updatedUser): Observable<IUser> {
    var urlPut = this._url + '/' + updatedUser.id;
    return this.http.put<IUser>(urlPut, updatedUser);
  }

  //ToDo: Create methods to add users to userRoles one at a time or in bulk.
}
