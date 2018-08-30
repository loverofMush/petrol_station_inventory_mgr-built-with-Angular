import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetProductsComponent } from './wet-products.component';

describe('WetProductsComponent', () => {
  let component: WetProductsComponent;
  let fixture: ComponentFixture<WetProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
