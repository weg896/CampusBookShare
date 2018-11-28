import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestManageTemplateComponent } from './request-manage-template.component';

describe('RequestManageTemplateComponent', () => {
  let component: RequestManageTemplateComponent;
  let fixture: ComponentFixture<RequestManageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestManageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestManageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
