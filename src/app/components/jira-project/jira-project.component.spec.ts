import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraProjectComponent } from './jira-project.component';

describe('JiraProjectComponent', () => {
  let component: JiraProjectComponent;
  let fixture: ComponentFixture<JiraProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
