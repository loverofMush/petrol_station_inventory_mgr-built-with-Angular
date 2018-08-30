import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-edit-employee-level',
  templateUrl: './edit-employee-level.component.html',
  styleUrls: ['./edit-employee-level.component.css']
})
export class EditEmployeeLevelComponent implements OnInit {

  @Input() level: Employee;

  constructor(
    private route: ActivatedRoute,
    private emp: EmployeesService,
    private location: Location
  ) { }

  public form= {
    name: null
  };

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.emp.editEmployeeLevel(id)
    .subscribe(level => {
      this.level = level;
      this.form = level;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.emp.updateEmployeeLevel(this.level)
      .subscribe(() => this.goBack());
  }
}
