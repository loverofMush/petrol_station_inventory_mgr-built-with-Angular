import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  query: any;

  constructor(
    private emp: EmployeesService
  ) { }

  ngOnInit() {
    this.getAllExpenses();
  }

  getAllExpenses() {
    this.emp.getAllEmployees()
      .subscribe(employees => {
      this.employees = employees;
    });
  }

  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(s => s !== employee);
    this.emp.deleteEmployee(employee).subscribe();
  }
}
