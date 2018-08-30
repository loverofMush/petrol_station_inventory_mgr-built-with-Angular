import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetProductSalesComponent } from './wet-product-sales.component';

describe('WetProductSalesComponent', () => {
  let component: WetProductSalesComponent;
  let fixture: ComponentFixture<WetProductSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetProductSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetProductSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
