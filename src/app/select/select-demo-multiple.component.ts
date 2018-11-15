import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-select-demo-multiple',
    template: `
    <p>例子1</p>
    <bgx-select [bgxMaxMultipleCount]="4" style="width: 200px;" bgxMode="multiple" bgxPlaceHolder="Please select" [(ngModel)]="listOfSelectedValue">
      <bgx-option *ngFor="let option of listOfOption" [bgxLabel]="option.label" [bgxValue]="option.value"></bgx-option>
    </bgx-select>
    <br><br>
    <p>例子2</p>
    <bgx-select [bgxMaxMultipleCount]="4" style="width: 200px;" bgxMode="multiple" bgxPlaceHolder="Please select" [(ngModel)]="listOfSelectedValue" [bgxTextShow] = "false">
      <bgx-option *ngFor="let option of listOfOption" [bgxLabel]="option.label" [bgxValue]="option.value"></bgx-option>
    </bgx-select>
                `,
    styles: []
})
export class SelectDemoMultipleComponent implements OnInit {
  listOfOption = [];
  listOfSelectedValue = [ 'a10', 'c12', 'd13' ];
  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(2) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
