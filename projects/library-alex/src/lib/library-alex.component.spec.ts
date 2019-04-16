import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAlexComponent } from './library-alex.component';

describe('LibraryAlexComponent', () => {
  let component: LibraryAlexComponent;
  let fixture: ComponentFixture<LibraryAlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
