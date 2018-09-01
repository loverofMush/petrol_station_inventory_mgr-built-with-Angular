import { Injectable } from '@angular/core';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Stock } from '../model/stock';
import { Station } from '../model/station';


@Injectable()
export class StocksService {
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
    this.notify.error(`StocksService: ${message}`);
  }

  //All Wet Stocks

  addStock(data) {
    const URL = `${this.API}/wet-product-stock`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addStock'))
    );
  }

  getStocksByStation (): Observable<Station[]> {
    const url = `${this.API}/wet-stocksbystation`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getStocksByStation', []))
      );
  }

  getStocksByDate (): Observable<Stock[]> {
    const url = `${this.API}/wetstocks-bydate`;
    return this.http.get<Stock[]>(url)
      .pipe(
        catchError(this.handleError('getStocksByDate', []))
      );
  }

  editStock(id: number): Observable<Stock> {
    const url = `${this.API}/edit-wetproduct-stock/${id}`;
    return this.http.get<Stock>(url).pipe(
      catchError(this.handleError<Stock>(`editStock id=${id}`))
    );
  }

  updateStock (stock: Stock): Observable<any> {
    const url = `${this.API}/update-wetstock/${stock.id}`;
    return this.http.put(url, stock).pipe(
      catchError(this.handleError<any>('updateStock'))
    );
  }

  deleteStock (stock: Stock | number): Observable<Stock> {
    const id = typeof stock === 'number' ? stock : stock.id;
    const url = `${this.API}/delete-wetproduct-stock/${id}`;

    return this.http.delete<Stock>(url).pipe(
      catchError(this.handleError<Stock>('deleteStock'))
    );
  }

  //All Dry Stocks

  addDryStock(data) {
    const URL = `${this.API}/dry-product-stock`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addDryStock'))
    );
  }

  getDryStocksByStation (): Observable<Station[]> {
    const url = `${this.API}/dry-stocksbystation`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getDryStocksByStation', []))
      );
  }

  getDryStocksByDate (id: number): Observable<Stock[]> {
    const url = `${this.API}/drystocks-bydate/${id}`;
    return this.http.get<Stock[]>(url)
      .pipe(
        catchError(this.handleError<Stock[]>(`getDryStocksByDate id=${id}`))
      );
  }

  editDryStock(id: number): Observable<Stock> {
    const url = `${this.API}/edit-dryproduct-stock/${id}`;
    return this.http.get<Stock>(url).pipe(
      catchError(this.handleError<Stock>(`getDryStock id=${id}`))
    );
  }

  updateDryStock (stock: Stock): Observable<any> {
    const url = `${this.API}/update-drystock/${stock.id}`;
    return this.http.put(url, stock).pipe(
      catchError(this.handleError<any>('updateDryStock'))
    );
  }

  deleteDryStock (stock: Stock | number): Observable<Stock> {
    const id = typeof stock === 'number' ? stock : stock.id;
    const url = `${this.API}/delete-dryproduct-stock/${id}`;

    return this.http.delete<Stock>(url).pipe(
      catchError(this.handleError<Stock>('deleteDryStock'))
    );
  }
}
