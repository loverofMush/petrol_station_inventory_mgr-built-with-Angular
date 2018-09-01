import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

export enum AuthResponseStatus { SESSION_EXPIRED = 0, FRESH_USER = 1, SIGNED_IN = 2}

@Injectable()
export class AuthenticationService {

  private baseUrl = 'https://inventappapi.herokuapp.com/api';
  public authLevel: AuthResponseStatus = AuthResponseStatus.FRESH_USER;

  private isLoggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.isLoggedIn.asObservable();

  changeAuthStatus(value : boolean) {
    this.isLoggedIn.next(value);
  }

  constructor(
    private http: HttpClient,
    private Token: TokenService
  ) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  isAuthenticated(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
}
