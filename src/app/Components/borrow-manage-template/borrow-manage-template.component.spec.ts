import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowManageTemplateComponent } from './borrow-manage-template.component';

describe('BorrowManageTemplateComponent', () => {
  let component: BorrowManageTemplateComponent;
  let fixture: ComponentFixture<BorrowManageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowManageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowManageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
