import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetSalesListComponent } from './wet-sales-list.component';

describe('WetSalesListComponent', () => {
  let component: WetSalesListComponent;
  let fixture: ComponentFixture<WetSalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetSalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
