import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDryStockComponent } from './edit-dry-stock.component';

describe('EditDryStockComponent', () => {
  let component: EditDryStockComponent;
  let fixture: ComponentFixture<EditDryStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDryStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
