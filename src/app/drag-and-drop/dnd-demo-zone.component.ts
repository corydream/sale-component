import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo2',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="仅限于Zone1" buiDraggable [dragEnabled]="true" [removeTransition]="true" [dropZones]="['zone1']">
      <p>快拖动我！</p>
      <p>Zone 1 only</p>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="Zone1 & Zone2" buiDraggable [dragEnabled]="true" [removeTransition]="true" [dropZones]="['zone1', 'zone2']">
      <p>快拖动我！</p>
      <p>Zone 1 & 2</p>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="Zone 1" buiDroppable [dropZones]="['zone1']" (onDropSuccess)="restrictedDrop1=$event">
      <div *ngIf="restrictedDrop1">元素落在这里</div>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="Zone 2" buiDroppable [dropZones]="['zone2']" (onDropSuccess)="restrictedDrop2=$event">
      <div *ngIf="restrictedDrop2">元素落在这里</div>
    </nz-card>
  </div>
</div>

  `,
  styles: []
})
export class DndDemoZoneComponent implements OnInit {
  restrictedDrop1: any = null;
  restrictedDrop2: any = null;
  constructor() { }

  ngOnInit() { }
}
