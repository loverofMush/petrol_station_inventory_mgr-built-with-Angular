import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeLevelComponent } from './create-employee-level.component';

describe('CreateEmployeeLevelComponent', () => {
  let component: CreateEmployeeLevelComponent;
  let fixture: ComponentFixture<CreateEmployeeLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
