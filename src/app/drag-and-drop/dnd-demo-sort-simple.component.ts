import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo6',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="12">
    <nz-card style="width:300px;" nzTitle="最喜欢喝的饮料">
      <ul class="list-group" buiSortableContainer [sortableData]="listOne">
        <li *ngFor="let item of listOne; let i = index" class="list-group-item" buiSortable [sortableIndex]="i">{{item}}</li>
      </ul>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="12">
    <div style="border: 1px solid #ddd;padding: 20px;border-radius: 4px;;">
      <span>排序：</span>
      <p style="margin: 5px;" *ngFor="let item of listOne; let i = index">{{i + 1}}) {{item}}</p>
    </div>
  </div>
</div>

  `,
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DndDemoSortSimpleComponent implements OnInit {
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  constructor() { }

  ngOnInit() { }
}
