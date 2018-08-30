import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDryProductComponent } from './create-dry-product.component';

describe('CreateDryProductComponent', () => {
  let component: CreateDryProductComponent;
  let fixture: ComponentFixture<CreateDryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
