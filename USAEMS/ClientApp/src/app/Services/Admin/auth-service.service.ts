import { Injectable } from "@angular/core";
import { IUser } from "../../Interfaces/Admin/iuser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { IAuthResponse } from '../../Interfaces/Admin/iauth-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<IAuthResponse>;
  public currentUser: Observable<IAuthResponse>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<IAuthResponse>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IAuthResponse {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>("https://localhost:5001/api/auth/login", { email: email, password: password })
      .pipe(
        map(user => {
          console.log(user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login');
  }

  register(user: any): Observable<IUser> {
    return this.http.post<IUser>(
      "https://localhost:5001/api/auth/register",
      user
    );
  }
}
