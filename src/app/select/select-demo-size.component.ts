import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-select-demo-size',
    template: `
        <nz-radio-group [(ngModel)]="size">
            <label nz-radio-button nzValue="large"><span>Large</span></label>
            <label nz-radio-button nzValue="default"><span>Default</span></label>
            <label nz-radio-button nzValue="small"><span>Small</span></label>
        </nz-radio-group>
        <br><br>
        <bgx-select style="width: 200px;" [(ngModel)]="singleValue" [bgxSize]="size">
            <bgx-option *ngFor="let option of listOfOption" [bgxLabel]="option.label" [bgxValue]="option.value"></bgx-option>
        </bgx-select>
        <br><br>
        <bgx-select style="width: 100%" [(ngModel)]="multipleValue" [bgxSize]="size" bgxMode="multiple" bgxPlaceHolder="Please select">
            <bgx-option *ngFor="let option of listOfOption" [bgxLabel]="option.label" [bgxValue]="option.value"></bgx-option>
        </bgx-select>
        `,
    styles: []
})
export class SelectDemoSizeComponent implements OnInit {
    listOfOption = [];
    size = 'default';
    singleValue = 'a10';
    multipleValue = [ 'a10', 'c12' ];
    ngOnInit(): void {
      const children = [];
      for (let i = 10; i < 36; i++) {
        children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
      }
      this.listOfOption = children;
    }
}
