import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetProductStockComponent } from './wet-product-stock.component';

describe('WetProductStockComponent', () => {
  let component: WetProductStockComponent;
  let fixture: ComponentFixture<WetProductStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetProductStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
