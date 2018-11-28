import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManageTemplateComponent } from './post-manage-template.component';

describe('PostManageTemplateComponent', () => {
  let component: PostManageTemplateComponent;
  let fixture: ComponentFixture<PostManageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostManageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
