import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeLevelComponent } from './edit-employee-level.component';

describe('EditEmployeeLevelComponent', () => {
  let component: EditEmployeeLevelComponent;
  let fixture: ComponentFixture<EditEmployeeLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
