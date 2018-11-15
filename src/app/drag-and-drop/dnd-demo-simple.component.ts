import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo1',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="可拖动的元素" buiDraggable [dragEnabled]="true" [removeTransition]="true">
      <p>快拖动我！</p>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="元素落在这里" buiDroppable (onDropSuccess)="simpleDrop=simpleDrop + 1">
      <p *ngIf="simpleDrop">Dropped {{simpleDrop}} times</p>
    </nz-card>
  </div>
</div>

  `,
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DndDemoSimpleComponent implements OnInit {
  simpleDrop = 0;
  constructor() { }

  ngOnInit() { }
}
