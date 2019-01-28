import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankPersonTemplateComponent } from './rank-person-template.component';

describe('RankPersonTemplateComponent', () => {
  let component: RankPersonTemplateComponent;
  let fixture: ComponentFixture<RankPersonTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankPersonTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankPersonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
