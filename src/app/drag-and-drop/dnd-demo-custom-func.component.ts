import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo4',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="可拖动的元素">
        <div buiDraggable [dragData]="3" class="col" [removeTransition]="true">
          倍数为3
        </div>
        <div buiDraggable [dragData]="6" class="col" [removeTransition]="true">
          倍数为6
        </div>
        <div buiDraggable [dragData]="10" class="col" [removeTransition]="true">
          倍数为10
        </div>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="6">
  <pre class="pre">allowDropFunction(baseInteger: any): any {{ '{' }}
  return (dragData: any) => dragData % baseInteger === 0;
{{ '}' }}</pre>
    <nz-card style="width:300px;" nzTitle="设置倍数" buiDroppable [allowDrop]="allowDropFunction(box1Integer)" (onDropSuccess)="addTobox1Items($event)">
      <div>
        Multiples of
        <nz-input-number [(ngModel)]="box1Integer" style="width:50px;height:30px;"></nz-input-number>
        only
      </div>
      <div *ngFor="let item of box1Items">dragData = {{item}}</div>
    </nz-card>
  </div>
</div>

  `,
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DndDemoCustomFuncComponent implements OnInit {
  box1Integer: number = 3;
  box2Integer: number = 10;

  box1Items: string[] = [];
  box2Items: string[] = [];

  allowDropFunction(baseInteger: number): any {
    return (dragData: any) => dragData % baseInteger === 0;
  }

  addTobox1Items($event: any) {
    this.box1Items.push($event.dragData);
  }

  addTobox2Items($event: any) {
    this.box2Items.push($event.dragData);
  }
  constructor() { }

  ngOnInit() { }
}
