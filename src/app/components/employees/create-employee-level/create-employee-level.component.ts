import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-create-employee-level',
  templateUrl: './create-employee-level.component.html',
  styleUrls: ['./create-employee-level.component.css']
})
export class CreateEmployeeLevelComponent implements OnInit {

  public form= {
    name: null
  };

  constructor(
    private emp: EmployeesService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  saveEmployeeLevel() {
    this.emp.addEmployeeLevel(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.name = null;
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }
}
