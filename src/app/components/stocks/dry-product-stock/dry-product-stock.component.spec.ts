import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryProductStockComponent } from './dry-product-stock.component';

describe('DryProductStockComponent', () => {
  let component: DryProductStockComponent;
  let fixture: ComponentFixture<DryProductStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryProductStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
