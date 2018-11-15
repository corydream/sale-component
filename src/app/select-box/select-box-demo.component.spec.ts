import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgxDemoSelectBoxComponent } from './select-box-demo.component';

describe('SelectBoxDemoComponent', () => {
  let component: BgxDemoSelectBoxComponent;
  let fixture: ComponentFixture<BgxDemoSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgxDemoSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgxDemoSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
