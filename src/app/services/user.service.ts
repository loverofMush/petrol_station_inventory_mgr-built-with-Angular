import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Role } from '../model/role';
import { Station } from '../model/station';

@Injectable()
export class UserService {

  API = 'https://inventappapi.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsers(): Observable<Station[]> {
    const URL = `${this.API}/usersbystation`;
    // get users from api
    return this.http.get<Station[]>(URL)
  }

  getRoles(): Observable<Role[]>  {
    const URL = `${this.API}/roles`;
    // get users from api
    return this.http.get<Role[]>(URL)
  }

  getStations(): Observable<Station[]>  {
    const URL = `${this.API}/stations`;
    // get users from api
    return this.http.get<Station[]>(URL)
  }

  addUser (data) {
    const URL = `${this.API}/create-user`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addUser'))
    );
  }
}
