import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDryProductComponent } from './edit-dry-product.component';

describe('EditDryProductComponent', () => {
  let component: EditDryProductComponent;
  let fixture: ComponentFixture<EditDryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
