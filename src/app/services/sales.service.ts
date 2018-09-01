import { Injectable } from '@angular/core';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { Sale, DrySale } from '../model/sale';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Station } from '../model/station';
import { User } from '../model/user';


@Injectable()
export class SalesService {

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
  getUserByStation(): Observable<User> {
    const url = `${this.API}/station-user`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUserByStation`))
    );
  }

  // All Wet Sales services
  getSalesByStation (): Observable<Station[]> {
    const url = `${this.API}/salesbystation`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getSalesByStation', []))
      );
  }

  getSalesByUser(id: number, product_id: number, date: Date): Observable<Sale[]> {
    const url = `${this.API}/user-wetsales/${id}/${product_id}/${date}`;
    return this.http.get<Sale[]>(url).pipe(
      catchError(this.handleError<Sale[]>(`getDrySalesByUser id=${id}`))
    );
  }

  getSalesByMonth (): Observable<Station[]> {
    const url = `${this.API}/sum`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getSalesByStation', []))
      );
  }

  EditSale(id: number): Observable<Sale> {
    const url = `${this.API}/edit-wetproduct-sale/${id}`;
    return this.http.get<Sale>(url).pipe(
      catchError(this.handleError<Sale>(`EditSale id=${id}`))
    );
  }

  updateSale (sale: Sale): Observable<any> {
    const url = `${this.API}/update-wetproduct-sale/${sale.id}`;
    return this.http.put(url, sale).pipe(
      catchError(this.handleError<any>('updateSale'))
    );
  }

  getSalesByProductId(id: number): Observable<Sale[]> {
    const url = `${this.API}/wet-product-sales/${id}`;
    return this.http.get<Sale[]>(url).pipe(
      catchError(this.handleError<Sale[]>(`getSales id=${id}`))
    );
  }

  addSale(data) {
    const URL = `${this.API}/wet-product-sale`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addSale'))
    );
  }

  deleteSale(sale: Sale| number): Observable<Sale> {
    const id = typeof sale === 'number' ? sale : sale.id;
    const url = `${this.API}/delete-wet-sale/${id}`;

    return this.http.delete<Sale>( url).pipe(
      catchError(this.handleError<Sale>('deleteSale'))
    );
  }

  //All Dry Sales services
  getTotalDrySalesByStation (): Observable<Station[]> {
    const url = `${this.API}/stationdrysales`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getTotalDrySalesByStation', []))
      );
  }

  getDrySalesByUser(id: number, date: Date): Observable<DrySale[]> {
    const url = `${this.API}/user-drysales/${id}/${date}`;
    return this.http.get<DrySale[]>(url).pipe(
      catchError(this.handleError<DrySale[]>(`getDrySalesByUser id=${id}`))
    );
  }

  addDrySale(data) {
    const URL = `${this.API}/dry-product-sale`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addDrySale'))
    );
  }

  deleteDrySale(sale: DrySale| number): Observable<DrySale> {
    const id = typeof sale === 'number' ? sale : sale.id;
    const url = `${this.API}/delete-dry-sale/${id}`;

    return this.http.delete<DrySale>( url).pipe(
      catchError(this.handleError<DrySale>('deleteDrySale'))
    );
  }

  getDrySalesByDate(id: number): Observable<DrySale[]> {
    const url = `${this.API}/drysales-bydate/${id}`;
    return this.http.get<DrySale[]>(url)
    .pipe(
      catchError(this.handleError<DrySale[]>(`getSalesByDate id=${id}`))
    );
  }

  EditDrySale(id: number): Observable<DrySale> {
    const url = `${this.API}/edit-dryproduct-sale/${id}`;
    return this.http.get<DrySale>(url).pipe(
      catchError(this.handleError<DrySale>(`EditDrySale id=${id}`))
    );
  }

  updateDrySale (sale: DrySale): Observable<any> {
    const url = `${this.API}/update-dryproduct-sale/${sale.id}`;
    return this.http.put(url, sale).pipe(
      catchError(this.handleError<any>('updateDrySale'))
    );
  }
}
