import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksManagePageComponent } from './books-manage-page.component';

describe('BooksManagePageComponent', () => {
  let component: BooksManagePageComponent;
  let fixture: ComponentFixture<BooksManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
