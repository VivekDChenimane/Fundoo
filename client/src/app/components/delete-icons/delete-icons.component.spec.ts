import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIconsComponent } from './delete-icons.component';

describe('DeleteIconsComponent', () => {
  let component: DeleteIconsComponent;
  let fixture: ComponentFixture<DeleteIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
