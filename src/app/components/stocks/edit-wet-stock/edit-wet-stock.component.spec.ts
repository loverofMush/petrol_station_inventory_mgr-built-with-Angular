import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWetStockComponent } from './edit-wet-stock.component';

describe('EditWetStockComponent', () => {
  let component: EditWetStockComponent;
  let fixture: ComponentFixture<EditWetStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWetStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWetStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
