import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWetProductComponent } from './create-wet-product.component';

describe('CreateWetProductComponent', () => {
  let component: CreateWetProductComponent;
  let fixture: ComponentFixture<CreateWetProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWetProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
