import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo3',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="可拖动的元素" buiDraggable [dragEnabled]="true" [removeTransition]="true" [dragData]="transferData">
      <p>快拖动我！</p>
      <div>{{transferData | json}}</div>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="元素落在这里" buiDroppable (onDropSuccess)="transferDataSuccess($event)">
      <p>Items:{{receivedData.length}}</p>
      <div [hidden]="receivedData.length < 0" *ngFor="let data of receivedData">{{data | json}}</div>
    </nz-card>
  </div>
</div>

  `,
  styles: []
})
export class DndDemoCustomDataComponent implements OnInit {
  transferData: Object = { id: 1, msg: 'Hello' };
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
  }
  constructor() { }

  ngOnInit() { }
}
