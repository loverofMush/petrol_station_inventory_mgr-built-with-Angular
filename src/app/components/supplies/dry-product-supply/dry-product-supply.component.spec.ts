import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryProductSupplyComponent } from './dry-product-supply.component';

describe('DryProductSupplyComponent', () => {
  let component: DryProductSupplyComponent;
  let fixture: ComponentFixture<DryProductSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryProductSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryProductSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
