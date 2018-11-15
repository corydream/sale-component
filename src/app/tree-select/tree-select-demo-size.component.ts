import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from './tree-data';
import { FlatCountries } from './sigle-data';

@Component({
  selector: 'app-tree-select-demo4',
  template: `
  <nz-radio-group [(ngModel)]="size">
    <label nz-radio-button nzValue="large">Large</label>
    <label nz-radio-button nzValue="default">Default</label>
    <label nz-radio-button nzValue="small">Small</label>
  </nz-radio-group>
  <br><br>
  <bgx-tree-select name="simpleSelect" [bgxItems]="singleItems" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="false"
    [(ngModel)]="simpleSelected" bgxPlaceholder="placeholder" [bgxFilterPlaceholder]="filterPlaceholder"
    [bgxAllowFilter]="showFilter" bgxShowBoxHeight="150" [bgxSize]="size">
  </bgx-tree-select>
  <br>
  <bgx-tree-select name="simpleSelect2" [bgxItems]="singleItems" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="false"
    [(ngModel)]="simpleSelected" bgxPlaceholder="placeholder" [bgxFilterPlaceholder]="filterPlaceholder"
    [bgxAllowFilter]="showFilter" bgxShowBoxHeight="150" [bgxSize]="size">
  </bgx-tree-select>
  <br>
  <bgx-tree-select name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="true"
    [(ngModel)]="multipleSelected" bgxPlaceholder="placeholder" [bgxAllowParentSelection]="allowParentSelection"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter"
    [bgxSize]="size" [bgxWidth]="width">
  </bgx-tree-select>
  <br>
  <bgx-tree-select name="multipleSelect2" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="true"
    [(ngModel)]="multipleSelected2" bgxPlaceholder="placeholder" [bgxAllowParentSelection]="allowParentSelection"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter"
    [bgxSize]="size" [bgxWidth]="width">
  </bgx-tree-select>
  `,
  styles: []
})
export class BgxDemoTreeSelectSizeComponent implements OnInit {
  public items = HierarchicalCountries;
  public singleItems = FlatCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public placeholder = '请选择国家';
  public filterPlaceholder = 'Type here to filter elements...';
  public width = '100%';
  public size = 'default';

  public simpleSelected = {
    id: 'CD',
    name: 'Democratic Republic of the Congo',
    capital: 'Kinshasa',
    phone: '243',
    currency: 'CDF'
  };

  public multipleSelected = [
    {
      id: 'BW',
      name: 'Botswana',
      capital: 'Gaborone',
      phone: '267',
      currency: 'BWP'
    },
    {
      id: 'CF',
      name: 'Central African Republic',
      capital: 'Bangui',
      phone: '236',
      currency: 'XAF'
    }
  ];

  public multipleSelected2 = [
    {
      id: 'TN',
      name: 'Tunisia',
      capital: 'Tunis',
      phone: '216',
      currency: 'TND'
    },
    {
      id: 'UG',
      name: 'Uganda',
      capital: 'Kampala',
      phone: '256',
      currency: 'UGX'
    },
    {
      id: 'YT',
      name: 'Mayotte',
      capital: 'Mamoudzou',
      phone: '262',
      currency: 'EUR'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
