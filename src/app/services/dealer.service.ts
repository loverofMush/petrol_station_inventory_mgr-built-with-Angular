import { Injectable } from '@angular/core';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Supplier } from '../model/supplier';

@Injectable()
export class DealerService {

  API = 'https://inventappapi.herokuapp.com/api';

  constructor(
    private http: HttpClient,
    private notify: SnotifyService
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.notify.error(`DealerService: ${message}`);
  }

  getSuppliers (): Observable<Supplier[]> {
    const url = `${this.API}/suppliers`;
    return this.http.get<Supplier[]>(url)
      .pipe(
        catchError(this.handleError('getSuppliers', []))
      );
  }

  addSupplier(data) {
    const URL = `${this.API}/create-supplier`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addSupplier'))
    );
  }

  editSupplier(id: number): Observable<Supplier> {
    const url = `${this.API}/edit-supplier/${id}`;
    return this.http.get<Supplier>(url).pipe(
      catchError(this.handleError<Supplier>(`editSupplier id=${id}`))
    );
  }

  updateSupplier (sup: Supplier): Observable<any> {
    const url = `${this.API}/update-supplier/${sup.id}`;
    return this.http.put(url, sup).pipe(
      catchError(this.handleError<any>('updateSupplier'))
    );
  }

  deleteSupplier (dealer: Supplier | number): Observable<Supplier> {
    const id = typeof dealer === 'number' ? dealer : dealer.id;
    const url = `${this.API}/delete-supplier/${id}`;

    return this.http.delete<Supplier>(url).pipe(
      catchError(this.handleError<Supplier>('deleteSupplier'))
    );
  }

}
