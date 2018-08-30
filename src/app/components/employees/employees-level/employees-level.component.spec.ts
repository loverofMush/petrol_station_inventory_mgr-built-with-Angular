import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLevelComponent } from './employees-level.component';

describe('EmployeesLevelComponent', () => {
  let component: EmployeesLevelComponent;
  let fixture: ComponentFixture<EmployeesLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
