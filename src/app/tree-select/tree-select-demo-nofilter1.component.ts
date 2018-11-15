import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { FlatCountries } from './sigle-data';

@Component({
  selector: 'app-tree-select-demo3',
  template: `
  <bgx-tree-select name="noFilterSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="false"
  [(ngModel)]="noFilterSelected" #noFilterSelect="ngModel" [bgxAllowFilter]="showFilter" [bgxDisabled]="disabled"
  [bgxMaxHeight]="maxHeight">
  </bgx-tree-select>
  `,
  styles: []
})
export class BgxDemoTreeSelectNoFilterComponent implements OnInit {

  public items = FlatCountries;
  public showFilter = false;
  public disabled = false;
  public placeholder = '请选择国家';
  public maxHeight = 200;

  public noFilterSelected = {
    id: 'DJ',
    name: 'Djibouti',
    capital: 'Djibouti',
    phone: '253',
    currency: 'DJF'
  };
  constructor() { }

  ngOnInit() { }
}
