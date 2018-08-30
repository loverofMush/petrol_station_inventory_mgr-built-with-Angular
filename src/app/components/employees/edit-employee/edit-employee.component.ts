import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private emp: EmployeesService,
    private location: Location
  ) { }

  public form= {
    level: null,
    firstName: null,
    secondName: null,
    lastName: null,
    salary: null,
    phone: null,
    address: null,
    date_of_birth: null,
    date_hired: null,
    station: null
  };

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.emp.editEmployee(id)
    .subscribe(employee => {
      this.employee = employee;
      this.form = employee;
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateEmployee(): void {
    this.emp.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

}
