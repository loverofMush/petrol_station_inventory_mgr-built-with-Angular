import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWetPurchaseComponent } from './edit-wet-purchase.component';

describe('EditWetPurchaseComponent', () => {
  let component: EditWetPurchaseComponent;
  let fixture: ComponentFixture<EditWetPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWetPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWetPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
