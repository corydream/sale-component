import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropDemoComponent } from './drag-and-drop-demo.component';

describe('DragAndDropDemoComponent', () => {
  let component: DragAndDropDemoComponent;
  let fixture: ComponentFixture<DragAndDropDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
