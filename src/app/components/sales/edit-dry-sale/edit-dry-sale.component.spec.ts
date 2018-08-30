import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrySaleComponent } from './edit-dry-sale.component';

describe('EditDrySaleComponent', () => {
  let component: EditDrySaleComponent;
  let fixture: ComponentFixture<EditDrySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDrySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
