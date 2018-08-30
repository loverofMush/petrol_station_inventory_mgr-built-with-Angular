import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryProductSalesComponent } from './dry-product-sales.component';

describe('DryProductSalesComponent', () => {
  let component: DryProductSalesComponent;
  let fixture: ComponentFixture<DryProductSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryProductSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryProductSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
