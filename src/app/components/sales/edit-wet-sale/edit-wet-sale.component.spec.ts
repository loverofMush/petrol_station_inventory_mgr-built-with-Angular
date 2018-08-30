import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWetSaleComponent } from './edit-wet-sale.component';

describe('EditWetSaleComponent', () => {
  let component: EditWetSaleComponent;
  let fixture: ComponentFixture<EditWetSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWetSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWetSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
