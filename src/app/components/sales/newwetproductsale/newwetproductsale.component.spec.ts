import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwetproductsaleComponent } from './newwetproductsale.component';

describe('NewwetproductsaleComponent', () => {
  let component: NewwetproductsaleComponent;
  let fixture: ComponentFixture<NewwetproductsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewwetproductsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwetproductsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
