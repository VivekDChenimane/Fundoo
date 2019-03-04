import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNotesComponent } from './display-notes.component';

describe('DisplayNotesComponent', () => {
  let component: DisplayNotesComponent;
  let fixture: ComponentFixture<DisplayNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
