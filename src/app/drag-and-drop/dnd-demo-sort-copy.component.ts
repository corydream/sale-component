import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo7',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="Source List">
      <ul class="list-group" buiSortableContainer [sortableData]="sourceList" [dropZones]="['source-dropZone']">
        <li *ngFor="let source of sourceList; let x = index" class="list-group-item"
          buiSortable [sortableIndex]="x"
          [dragData]="source">{{source.name}}</li>
      </ul>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="Target List" buiDroppable (onDropSuccess)="addTo($event)" [dropZones]="['source-dropZone']">
      <ul class="list-group">
        <li *ngFor="let target of targetList" class="list-group-item">
          {{target.name}}
        </li>
      </ul>
    </nz-card>
  </div>
</div>

  `,
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DndDemoSortCopyComponent implements OnInit {
  sourceList: Widget[] = [
    new Widget('1'), new Widget('2'),
    new Widget('3'), new Widget('4'),
    new Widget('5'), new Widget('6')
  ];

  targetList: Widget[] = [];
  addTo($event: any) {
    this.targetList.push($event.dragData);
  }

  constructor() { }

  ngOnInit() { }
}
class Widget {
  constructor(public name: string) { }
}
