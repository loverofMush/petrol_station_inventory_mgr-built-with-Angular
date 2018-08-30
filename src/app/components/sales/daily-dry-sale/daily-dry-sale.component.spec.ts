import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDrySaleComponent } from './daily-dry-sale.component';

describe('DailyDrySaleComponent', () => {
  let component: DailyDrySaleComponent;
  let fixture: ComponentFixture<DailyDrySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDrySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDrySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
