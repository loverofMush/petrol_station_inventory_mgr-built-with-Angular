import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrySalesListComponent } from './dry-sales-list.component';

describe('DrySalesListComponent', () => {
  let component: DrySalesListComponent;
  let fixture: ComponentFixture<DrySalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrySalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrySalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
