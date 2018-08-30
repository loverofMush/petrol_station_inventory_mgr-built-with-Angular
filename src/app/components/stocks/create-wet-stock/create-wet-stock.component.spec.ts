import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWetStockComponent } from './create-wet-stock.component';

describe('CreateWetStockComponent', () => {
  let component: CreateWetStockComponent;
  let fixture: ComponentFixture<CreateWetStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWetStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWetStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
