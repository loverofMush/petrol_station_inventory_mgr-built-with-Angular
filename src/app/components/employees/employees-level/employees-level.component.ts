import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/employee';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-level',
  templateUrl: './employees-level.component.html',
  styleUrls: ['./employees-level.component.css']
})
export class EmployeesLevelComponent implements OnInit {

  levels: Employee[];
  level: Employee;
  
  constructor(
    private emp: EmployeesService
  ) { }

  ngOnInit() {
    this.getLevels();
  }

  getLevels(): void {  
    this.emp.selectEmployeeLevels().subscribe(data => {
      this.levels = data;
    });
  }

  delete(level: Employee): void {
    this.levels = this.levels.filter(p => p !== level);
    this.emp.deleteEmployeeLevel(level).subscribe();
  }
}
