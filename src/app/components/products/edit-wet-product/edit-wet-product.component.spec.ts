import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWetProductComponent } from './edit-wet-product.component';

describe('EditWetProductComponent', () => {
  let component: EditWetProductComponent;
  let fixture: ComponentFixture<EditWetProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWetProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
