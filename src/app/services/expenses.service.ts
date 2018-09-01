import { Injectable } from '@angular/core';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Expense } from '../model/expense';
import { Station } from '../model/station';

@Injectable()
export class ExpensesService {

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
    this.notify.error(`ExpensesService: ${message}`);
  }

  //All Expense
  addExpense(data) {
    const URL = `${this.API}/create-expense`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addExpense'))
    );
  }

  getStationExpenses (): Observable<Station[]> {
    const url = `${this.API}/station-expenses`;
    return this.http.get<Station[]>(url)
      .pipe(
        catchError(this.handleError('getExpenses', []))
      );
  }

  getExpensesByUser(id: number, date: Date): Observable<Expense[]> {
    const url = `${this.API}/user-expenses/${id}/${date}`;
    return this.http.get<Expense[]>(url).pipe(
      catchError(this.handleError<Expense[]>(`getExpensesByUser id=${id}`))
    );
  }

  getExpensesByCategoryId(): Observable<Expense[]> {
    const url = `${this.API}/expenses-bydate`;
    return this.http.get<Expense[]>(url).pipe(
      catchError(this.handleError<Expense[]>(`getSalesByCategoryId`))
    );
  }

  selectExpenses (): Observable<Expense[]> {
    const url = `${this.API}/select-expense-type`;
    return this.http.get<Expense[]>(url)
      .pipe(
        catchError(this.handleError('selectExpenses', []))
      );
  }

  editExpense(id: number): Observable<Expense> {
    const url = `${this.API}/edit-station-expense/${id}`;
    return this.http.get<Expense>(url).pipe(
      catchError(this.handleError<Expense>(`editExpense id=${id}`))
    );
  }

  updateExpense (expense: Expense): Observable<any> {
    const url = `${this.API}/update-station-expense/${expense.id}`;
    return this.http.put(url, expense).pipe(
      catchError(this.handleError<any>('updateExpense'))
    );
  }

  deleteExpense (expense: Expense | number): Observable<Expense> {
    const id = typeof expense === 'number' ? expense : expense.id;
    const url = `${this.API}/delete-expense/${id}`;

    return this.http.delete<Expense>(url).pipe(
      catchError(this.handleError<Expense>('deleteExpense'))
    );
  }

  //All Expense Category
  addExpenseCat(data) {
    const URL = `${this.API}/create-expense-category`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addExpenseCat'))
    );
  }

  editExpenseCat(id: number): Observable<Expense> {
    const url = `${this.API}/edit-expense-category/${id}`;
    return this.http.get<Expense>(url).pipe(
      catchError(this.handleError<Expense>(`editExpenseCat id=${id}`))
    );
  }

  updateExpenseCat (cat: Expense): Observable<any> {
    const url = `${this.API}/update-expense-category/${cat.id}`;
    return this.http.put(url, cat).pipe(
      catchError(this.handleError<any>('updateExpenseCat'))
    );
  }

  deleteExpenseCat (cat: Expense | number): Observable<Expense> {
    const id = typeof cat === 'number' ? cat : cat.id;
    const url = `${this.API}/delete-expense-category/${id}`;

    return this.http.delete<Expense>(url).pipe(
      catchError(this.handleError<Expense>('deleteExpense'))
    );
  }
}
