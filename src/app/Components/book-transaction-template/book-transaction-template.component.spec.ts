import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTransactionTemplateComponent } from './book-transaction-template.component';

describe('BookTransactionTemplateComponent', () => {
  let component: BookTransactionTemplateComponent;
  let fixture: ComponentFixture<BookTransactionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTransactionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTransactionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
