import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrySupplyComponent } from './edit-dry-supply.component';

describe('EditDrySupplyComponent', () => {
  let component: EditDrySupplyComponent;
  let fixture: ComponentFixture<EditDrySupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDrySupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrySupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
