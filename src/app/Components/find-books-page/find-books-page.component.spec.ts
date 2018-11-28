import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBooksPageComponent } from './find-books-page.component';

describe('FindBooksPageComponent', () => {
  let component: FindBooksPageComponent;
  let fixture: ComponentFixture<FindBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
