import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbequipesComponent } from './nbequipes.component';

describe('NbequipesComponent', () => {
  let component: NbequipesComponent;
  let fixture: ComponentFixture<NbequipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbequipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbequipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
