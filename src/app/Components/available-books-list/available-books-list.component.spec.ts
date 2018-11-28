import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBooksListComponent } from './available-books-list.component';

describe('AvailableBooksListComponent', () => {
  let component: AvailableBooksListComponent;
  let fixture: ComponentFixture<AvailableBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBooksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
