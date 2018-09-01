import { Injectable } from '@angular/core';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from '../../../node_modules/rxjs/operators';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { Employee } from '../model/employee';
import { Station } from '../model/station';

@Injectable()
export class EmployeesService {

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
    this.notify.error(`EmployeesService: ${message}`);
  }

  //All Expense
  addEmployee(data) {
    const URL = `${this.API}/create-employee`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addEmployee'))
    );
  }

  getAllEmployees (): Observable<Employee[]> {
    const url = `${this.API}/all-employees`;
    return this.http.get<Employee[]>(url)
      .pipe(
        catchError(this.handleError('getAllEmployees', []))
      );
  }

  getStationEmployees(id: number): Observable<Employee[]> {
    const url = `${this.API}/station-employees/${id}`;
    return this.http.get<Employee[]>(url).pipe(
      catchError(this.handleError<Employee[]>(`getStationEmployees`))
    );
  }

  editEmployee(id: number): Observable<Employee> {
    const url = `${this.API}/edit-station-employee/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>(`editEmployee id=${id}`))
    );
  }

  updateEmployee (employee: Employee): Observable<any> {
    const url = `${this.API}/update-station-employee/${employee.id}`;
    return this.http.put(url, employee).pipe(
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  deleteEmployee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.API}/delete-employee/${id}`;

    return this.http.delete<Employee>(url).pipe(
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  getStations(): Observable<Station[]>  {
    const URL = `${this.API}/stations`;
    // get users from api
    return this.http.get<Station[]>(URL)
  }

  //All Expense Category
  addEmployeeLevel(data) {
    const URL = `${this.API}/create-employee-level`;
    return this.http.post(URL, data).pipe(
      catchError(this.handleError('addEmployeeLevel'))
    );
  }

  selectEmployeeLevels (): Observable<Employee[]> {
    const url = `${this.API}/employee-levels`;
    return this.http.get<Employee[]>(url)
      .pipe(
        catchError(this.handleError('selectEmployeeLevels', []))
      );
  }

  editEmployeeLevel(id: number): Observable<Employee> {
    const url = `${this.API}/edit-employee-level/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>(`editEmployeeLevel id=${id}`))
    );
  }

  updateEmployeeLevel (level: Employee): Observable<any> {
    const url = `${this.API}/update-employee-level/${level.id}`;
    return this.http.put(url, level).pipe(
      catchError(this.handleError<any>('updateEmployeeLevel'))
    );
  }

  deleteEmployeeLevel (level: Employee | number): Observable<Employee> {
    const id = typeof level === 'number' ? level : level.id;
    const url = `${this.API}/delete-employee-level/${id}`;

    return this.http.delete<Employee>(url).pipe(
      catchError(this.handleError<Employee>('deleteEmployeeLevel'))
    );
  }

}
