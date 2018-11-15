import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAntComponent } from './use-ant.component';

describe('UseAntComponent', () => {
  let component: UseAntComponent;
  let fixture: ComponentFixture<UseAntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseAntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
