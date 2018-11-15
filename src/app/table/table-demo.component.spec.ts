import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgxTableDemoComponent } from './table-demo.component';

describe('TableDemoComponent', () => {
  let component: BgxTableDemoComponent;
  let fixture: ComponentFixture<BgxTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgxTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgxTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
