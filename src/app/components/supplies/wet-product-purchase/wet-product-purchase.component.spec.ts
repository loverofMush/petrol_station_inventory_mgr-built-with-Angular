import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetProductPurchaseComponent } from './wet-product-purchase.component';

describe('WetProductPurchaseComponent', () => {
  let component: WetProductPurchaseComponent;
  let fixture: ComponentFixture<WetProductPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetProductPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetProductPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
