import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';

@Injectable()
export class ProductService {

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
    this.notify.error(`ProductService: ${message}`);
  }

  //All Wet Products

  addProduct(data) {
    const URL = `${this.API}/new-wet-product`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addProduct'))
    );
  }

  getProducts (): Observable<Product[]> {
    const url = `${this.API}/wet-products`;
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError('getProducts', []))
      );
  }

  editProduct(id: number): Observable<Product> {
    const url = `${this.API}/edit-wet-product/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`editProduct id=${id}`))
    );
  }

  updateProduct (product: Product): Observable<any> {
    const url = `${this.API}/update-product/${product.id}`;
    return this.http.put(url, product).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.API}/delete-product/${id}`;

    return this.http.delete<Product>(url).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  //All Dry Products

  addDryProduct(data) {
    const URL = `${this.API}/new-dry-product`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addDryProduct'))
    );
  }

  getDryProducts (): Observable<Product[]> {
    const url = `${this.API}/dry-products`;
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError('getDryProducts', []))
      );
  }

  fetchSubProducts (): Observable<Product[]> {
    const url = `${this.API}/dry-product-subs`;
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError('getDryProducts', []))
      );
  }

  getSubProducts (id: number): Observable<Product[]> {
    const url = `${this.API}/dry-product-sub/${id}`;
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError<Product[]>(`getDryProducts id=${id}`))
      );
  }

  editDryProduct(id: number): Observable<Product> {
    const url = `${this.API}/edit-dry-product/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`editDryProduct id=${id}`))
    );
  }

  updateDryProduct (product: Product): Observable<any> {
    const url = `${this.API}/update-dryproduct/${product.id}`;
    return this.http.put(url, product).pipe(
      catchError(this.handleError<any>('updateDryProduct'))
    );
  }

  deleteDryProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.API}/delete-dryproduct/${id}`;

    return this.http.delete<Product>(url).pipe(
      catchError(this.handleError<Product>('deleteDryProduct'))
    );
  }
}
