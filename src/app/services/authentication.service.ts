import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://pokemonteam-builder.herokuapp.com/api/v1'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: User) {
    return this._http.post(`${Api_Url}/users/register`, regUserData);
  }

  login(loginInfo) {
    const str = 
      `grant-type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`
    
    return this._http.post(`${Api_Url}/users/login`, str).subscribe( (token: Token) => {
      console.log(token);
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/Account/UserInfo`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

    this._http.post('${Api_Url}/Account/Logout', { headers: authHeader} );
    this._router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('api-key', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
