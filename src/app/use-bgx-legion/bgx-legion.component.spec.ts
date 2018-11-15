import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgxLegionComponent } from './sale-component.component';

describe('BgxLegionComponent', () => {
  let component: BgxLegionComponent;
  let fixture: ComponentFixture<BgxLegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgxLegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgxLegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
