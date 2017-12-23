import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityProjectComponent } from './entity-project.component';

describe('EntityProjectComponent', () => {
  let component: EntityProjectComponent;
  let fixture: ComponentFixture<EntityProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
