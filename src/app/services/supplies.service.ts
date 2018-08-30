import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators/tap';
import { catchError } from '../../../node_modules/rxjs/operators/catchError';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { of } from '../../../node_modules/rxjs/observable/of';
import { Station } from '../model/station';
import { Supply } from '../model/supply';


@Injectable()
export class SuppliesService {

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
    this.notify.error(`SuppliesService: ${message}`);
  }

  //All Wet Stocks

  addPurchase(data) {
    const URL = `${this.API}/wet-product-purchase`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addPurchase'))
    );
  }

  getPurchasesByStation (): Observable<Station[]> {
    const url = `${this.API}/wet-purchasesbystation`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getPurchasesByStation', []))
      );
  }

  getPurchasesByDate (): Observable<Supply[]> {
    const url = `${this.API}/wetpurchases-bydate`;
    return this.http.get<Supply[]>(url)
      .pipe(
        catchError(this.handleError('getPurchasesByDate', []))
      );
  }

  editPurchase(id: number): Observable<Supply> {
    const url = `${this.API}/edit-wetproduct-purchase/${id}`;
    return this.http.get<Supply>(url).pipe(
      catchError(this.handleError<Supply>(`editPurchase id=${id}`))
    );
  }

  updatePurchase (supply: Supply): Observable<any> {
    const url = `${this.API}/update-wetpurchase/${supply.id}`;
    return this.http.put(url, supply).pipe(
      catchError(this.handleError<any>('updatePurchase'))
    );
  }

  deletePurchase (supply: Supply | number): Observable<Supply> {
    const id = typeof supply === 'number' ? supply : supply.id;
    const url = `${this.API}/delete-wetproduct-purchase/${id}`;

    return this.http.delete<Supply>(url).pipe(
      catchError(this.handleError<Supply>('deletePurchase'))
    );
  }

  //All Dry Stocks

  addDrySupply(data) {
    const URL = `${this.API}/dry-product-supply`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addDrySupply'))
    );
  }

  getDrySuppliesByStation (): Observable<Station[]> {
    const url = `${this.API}/dry-suppliesbystation`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getDrySuppliesByStation', []))
      );
  }

  getDrySuppliesByDate(id: number): Observable<Supply[]> {
    const url = `${this.API}/drysupplies-bydate/${id}`;
    return this.http.get<Supply[]>(url)
      .pipe(
        tap(supplies => this.log(`fetched supplies id=${id}`)),
        catchError(this.handleError<Supply[]>(`getDrySuppliesByDate id=${id}`))
      );
  }

  editDrySupply(id: number): Observable<Supply> {
    const url = `${this.API}/edit-dryproduct-supply/${id}`;
    return this.http.get<Supply>(url).pipe(
      catchError(this.handleError<Supply>(`getDrySupply id=${id}`))
    );
  }

  updateDrySupply (supply: Supply): Observable<any> {
    const url = `${this.API}/update-drysupply/${supply.id}`;
    return this.http.put(url, supply).pipe(
      catchError(this.handleError<any>('updateDrySupply'))
    );
  }

  deleteDrySupply (supply: Supply | number): Observable<Supply> {
    const id = typeof supply === 'number' ? supply : supply.id;
    const url = `${this.API}/delete-dryproduct-supply/${id}`;

    return this.http.delete<Supply>(url).pipe(
      catchError(this.handleError<Supply>('deleteDrySupply'))
    );
  }
}
