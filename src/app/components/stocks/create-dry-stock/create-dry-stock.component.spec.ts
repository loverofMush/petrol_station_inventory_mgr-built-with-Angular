import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDryStockComponent } from './create-dry-stock.component';

describe('CreateDryStockComponent', () => {
  let component: CreateDryStockComponent;
  let fixture: ComponentFixture<CreateDryStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDryStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
