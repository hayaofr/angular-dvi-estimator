import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgenceComponent } from './urgence.component';

describe('UrgenceComponent', () => {
  let component: UrgenceComponent;
  let fixture: ComponentFixture<UrgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
