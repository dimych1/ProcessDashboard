import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBordComponent } from './main-bord.component';

describe('MainBordComponent', () => {
  let component: MainBordComponent;
  let fixture: ComponentFixture<MainBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
