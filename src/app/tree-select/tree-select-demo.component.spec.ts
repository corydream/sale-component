import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgxDemoTreeSelectComponent } from './tree-select-demo.component';

describe('TreeDemoComponent', () => {
  let component: BgxDemoTreeSelectComponent;
  let fixture: ComponentFixture<BgxDemoTreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgxDemoTreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgxDemoTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
