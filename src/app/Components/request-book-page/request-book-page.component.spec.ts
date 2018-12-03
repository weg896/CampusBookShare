import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookPageComponent } from './request-book-page.component';

describe('RequestBookPageComponent', () => {
  let component: RequestBookPageComponent;
  let fixture: ComponentFixture<RequestBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
