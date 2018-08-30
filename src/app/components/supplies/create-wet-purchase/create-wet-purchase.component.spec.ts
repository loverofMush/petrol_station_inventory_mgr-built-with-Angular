import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWetPurchaseComponent } from './create-wet-purchase.component';

describe('CreateWetPurchaseComponent', () => {
  let component: CreateWetPurchaseComponent;
  let fixture: ComponentFixture<CreateWetPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWetPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWetPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
