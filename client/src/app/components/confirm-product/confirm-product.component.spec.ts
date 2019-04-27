import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProductComponent } from './confirm-product.component';

describe('ConfirmProductComponent', () => {
  let component: ConfirmProductComponent;
  let fixture: ComponentFixture<ConfirmProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
