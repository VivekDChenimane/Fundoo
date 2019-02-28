import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteIconsComponent } from './note-icons.component';

describe('NoteIconsComponent', () => {
  let component: NoteIconsComponent;
  let fixture: ComponentFixture<NoteIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
