import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo8',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="8">
    <nz-card style="width:300px;" nzTitle="姓名列表">
      <ul class="list-group" buiSortableContainer [dropZones]="['boxers-zone']" [sortableData]="listBoxers">
        <li *ngFor="let item of listBoxers; let i = index"
          class="list-group-item" buiSortable [sortableIndex]="i">{{item}}</li>
      </ul>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="8">
    <nz-card style="width:300px;" nzTitle="第一队" buiSortableContainer [dropZones]="['boxers-zone']" [sortableData]="listTeamOne">
      <ul class="list-group">
        <li *ngFor="let item of listTeamOne; let i = index"
          class="list-group-item" buiSortable [sortableIndex]="i">{{item}}</li>
      </ul>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="8">
    <nz-card style="width:300px;" nzTitle="第二队" buiSortableContainer [dropZones]="['boxers-zone']" [sortableData]="listTeamTwo">
      <ul class="list-group">
        <li *ngFor="let item of listTeamTwo; let i = index"
          class="list-group-item" buiSortable [sortableIndex]="i">{{item}}</li>
      </ul>
    </nz-card>
  </div>
</div>

  `,
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DndDemoMultiSortComponent implements OnInit {

  listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
  constructor() { }

  ngOnInit() { }
}
