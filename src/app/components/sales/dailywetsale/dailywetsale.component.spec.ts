import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywetsaleComponent } from './dailywetsale.component';

describe('DailywetsaleComponent', () => {
  let component: DailywetsaleComponent;
  let fixture: ComponentFixture<DailywetsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailywetsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailywetsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
