import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendBooksPageComponent } from './lend-books-page.component';

describe('LendBooksPageComponent', () => {
  let component: LendBooksPageComponent;
  let fixture: ComponentFixture<LendBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
