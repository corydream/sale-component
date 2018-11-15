import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { FlatCountries } from './sigle-data';

@Component({
  selector: 'app-tree-select-demo2',
  template: `
  <bgx-tree-select name="simpleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="false"
    [(ngModel)]="simpleSelected" bgxPlaceholder="placeholder" #simpleSelect="ngModel" [bgxFilterPlaceholder]="filterPlaceholder"
    [bgxAllowFilter]="showFilter" bgxShowBoxHeight="150" [bgxDisabled]="disabled" [bgxWidth]="width">
  </bgx-tree-select>
  `,
  styles: []
})
export class BgxDemoTreeSelectSingleComponent implements OnInit {
  public items = FlatCountries;
  public showFilter = true;
  public disabled = false;
  public placeholder = '请选择国家'
  public filterPlaceholder = 'Type here to filter elements...';
  public width = 400;

  public simpleSelected = {
    id: 'NG',
    name: 'Nigeria',
    capital: 'Abuja',
    phone: '234',
    currency: 'NGN'
  };
  constructor() { }

  ngOnInit() { }
}
