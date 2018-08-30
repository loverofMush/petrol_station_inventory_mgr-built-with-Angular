import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private iss = {
    login: 'https://inventappapi.herokuapp.com/api/login',
    signup: 'https://inventappapi.herokuapp.com/api/signup'
  }

  constructor() {}

  handle(TOKEN) {
    this.set(TOKEN);
  }

  set(TOKEN) {
    localStorage.setItem('token', TOKEN);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const TOKEN = this.get()
    if(TOKEN){
      const payload = this.tokenPayload(TOKEN);
      if(payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  userRole() {
    const TOKEN = this.get()
    const role = this.tokenPayload(TOKEN);
    return role.role_id;
  }

  tokenPayload(TOKEN) {
    const payloadInfo = TOKEN.split('.')[1];
    return this.decode(payloadInfo);
  }

  decode(payloadInfo) {
    return JSON.parse(atob(payloadInfo));
  }

  loggedIn() {
    return this.isValid();
  }

  getTokenExiprationDate(): Date {
    var currentUser  = this.get();
    let decoded = this.tokenPayload(currentUser)

    if(decoded['exp'] === undefined) return null;
    const date: Date = new Date(0);
    date.setUTCSeconds(decoded['exp']);
    return date;
  }

  isChecked(currentUser?: string): boolean {
    if(!currentUser) currentUser = this.get();
    if(!currentUser) return true;

    const date = this.getTokenExiprationDate();
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
}
