import { Injectable } from '@angular/core';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Station } from '../model/station';
import { Observable, of} from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChartsService {

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
    this.notify.error(`SalesService: ${message}`);
  }

  getExpensesByMonth (): Observable<Station[]> {
    const url = `${this.API}/station-expensesbymonth`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getExpensesByMonth', []))
      );
  }

  getExpensesByCurrentMonth (): Observable<Station[]> {
    const url = `${this.API}/expenses-bymonth`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getExpensesByCurrentMonth', []))
      );
  }

  getSalesByMonth (): Observable<Station[]> {
    const url = `${this.API}/salesbymonth`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getSalesByStation', []))
      );
  }

  getSalesByCurrentMonth (): Observable<Station[]> {
    const url = `${this.API}/sum`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getSalesByCurrentMonth', []))
      );
  }

  getAllWetSalesByMonth (): Observable<Station[]> {
    const url = `${this.API}/allmonth-wetsales`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getAllWetSalesByMonth', []))
      );
  }

  //All Dry Sales services

  getAllDrySalesByMonth (): Observable<Station[]> {
    const url = `${this.API}/allmonth-drysales`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getAllDrySalesByMonth', []))
      );
  }

  getDrySalesByMonth (): Observable<Station[]> {
    const url = `${this.API}/drysalesbymonth`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getDrySalesByStation', []))
      );
  }

  getDrySalesByCurrentMonth (): Observable<Station[]> {
    const url = `${this.API}/drysum`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getDrySalesByCurrentMonth', []))
      );
  }
}
