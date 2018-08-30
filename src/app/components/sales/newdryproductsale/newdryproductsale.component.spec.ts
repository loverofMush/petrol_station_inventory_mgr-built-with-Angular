import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdryproductsaleComponent } from './newdryproductsale.component';

describe('NewdryproductsaleComponent', () => {
  let component: NewdryproductsaleComponent;
  let fixture: ComponentFixture<NewdryproductsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdryproductsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdryproductsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
