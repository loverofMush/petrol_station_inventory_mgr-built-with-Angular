import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrySupplyComponent } from './create-dry-supply.component';

describe('CreateDrySupplyComponent', () => {
  let component: CreateDrySupplyComponent;
  let fixture: ComponentFixture<CreateDrySupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDrySupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrySupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
