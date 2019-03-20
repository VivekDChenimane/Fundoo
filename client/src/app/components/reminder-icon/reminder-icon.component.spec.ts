import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderIconComponent } from './reminder-icon.component';

describe('ReminderIconComponent', () => {
  let component: ReminderIconComponent;
  let fixture: ComponentFixture<ReminderIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
