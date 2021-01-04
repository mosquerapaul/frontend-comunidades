import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'https://comunities.herokuapp.com/v1/api/auth/singup';
  private _loginUrl = 'https://comunities.herokuapp.com/v1/api/auth/singin';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor( private http: HttpClient ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
      .pipe(map(res => {
        // localStorage.setItem token
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
        return res;
      }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    // localStorage.removeItem -> token
    this.currentUserSubject.next(new User());
  }


}
