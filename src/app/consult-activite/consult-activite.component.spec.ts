import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultActiviteComponent } from './consult-activite.component';

describe('ConsultActiviteComponent', () => {
  let component: ConsultActiviteComponent;
  let fixture: ComponentFixture<ConsultActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
