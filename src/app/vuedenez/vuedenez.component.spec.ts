import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuedenezComponent } from './vuedenez.component';

describe('VuedenezComponent', () => {
  let component: VuedenezComponent;
  let fixture: ComponentFixture<VuedenezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuedenezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuedenezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
