import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendManageUserTemplateComponent } from './lend-manage-user-template.component';

describe('LendManageUserTemplateComponent', () => {
  let component: LendManageUserTemplateComponent;
  let fixture: ComponentFixture<LendManageUserTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendManageUserTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendManageUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
