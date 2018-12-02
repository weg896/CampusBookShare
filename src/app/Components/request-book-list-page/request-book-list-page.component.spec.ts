import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookListPageComponent } from './request-book-list-page.component';

describe('RequestBookListPageComponent', () => {
  let component: RequestBookListPageComponent;
  let fixture: ComponentFixture<RequestBookListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBookListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
