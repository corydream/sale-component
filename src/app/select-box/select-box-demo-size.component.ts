import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo5',
  template: `
  <nz-radio-group [(ngModel)]="size">
    <label nz-radio-button nzValue="large">Large</label>
    <label nz-radio-button nzValue="default">Default</label>
    <label nz-radio-button nzValue="small">Small</label>
  </nz-radio-group>
  <br><br>
  <bgx-select-box name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children"
    [(ngModel)]="multipleSelected" placeholder="Placeholder" [bgxWidth]="width"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter" [bgxSize]="size">
  </bgx-select-box>
  <br>
  <bgx-select-box name="multipleSelect2" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children"
    [(ngModel)]="multipleSelected2" placeholder="Placeholder" [bgxWidth]="width"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter" [bgxSize]="size">
  </bgx-select-box>
  `,
  styles: []
})
export class BgxDemoSelectBoxSizeComponent implements OnInit {
  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public placeholder = '请选择国家';
  public filterPlaceholder = 'Type here to filter elements...';
  public width = '100%';
  public size = 'default';

  public multipleSelected = [
    {
      id: 'BN',
      name: 'Brunei',
      capital: 'Bandar Seri Begawan',
      phone: '673',
      currency: 'BND'
    },
    {
      id: 'CC',
      name: 'Cocos [Keeling] Islands',
      capital: 'West Island',
      phone: '61',
      currency: 'AUD'
    }
  ];

  public multipleSelected2 = [{
    id: 'HK',
      name: 'Hong Kong',
      capital: 'City of Victoria',
      phone: '852',
      currency: 'HKD'
    },
    {
      id: 'ID',
      name: 'Indonesia',
      capital: 'Jakarta',
      phone: '62',
      currency: 'IDR'
    },
    {
      id: 'YE',
      name: 'Yemen',
      capital: 'Sana\'a',
      phone: '967',
      currency: 'YER'
    }
  ];
  constructor() { }

  ngOnInit() { }
}
