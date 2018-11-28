import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendManageTemplateComponent } from './lend-manage-template.component';

describe('LendManageTemplateComponent', () => {
  let component: LendManageTemplateComponent;
  let fixture: ComponentFixture<LendManageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendManageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendManageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
