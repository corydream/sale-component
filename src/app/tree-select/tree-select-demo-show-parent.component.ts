import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from './tree-data';

@Component({
  selector: 'app-tree-select-demo6',
  template: `
  <bgx-tree-select name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="true"
    [(ngModel)]="multipleSelected" bgxPlaceholder="placeholder" [bgxAllowParentSelection]="allowParentSelection" #multipleSelect="ngModel"
    [bgxFilterPlaceholder]="filterPlaceholder" [bgxAllowFilter]="showFilter" [bgxOnlyShowParent]="true">
    </bgx-tree-select>
  `,
})
export class BgxDemoTreeSelectShowParentComponent implements OnInit {
  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public placeholder = '请选择国家';
  public filterPlaceholder = 'Type here to filter elements...';

  public multipleSelected = [
    {
      id: 'AQ',
      name: 'Antarctica',
      capital: '',
      phone: '',
      currency: ''
    },
    {
      id: 'BV',
      name: 'Bouvet Island',
      capital: '',
      phone: '',
      currency: 'NOK'
    },
    {
      id: 'GS',
      name: 'South Georgia and the South Sandwich Islands',
      capital: 'King Edward Point',
      phone: '500',
      currency: 'GBP'
    },
    {
      id: 'HM',
      name: 'Heard Island and McDonald Islands',
      capital: '',
      phone: '',
      currency: 'AUD'
    },
    {
      id: 'TF',
      name: 'French Southern Territories',
      capital: 'Port-aux-Français',
      phone: '',
      currency: 'EUR'
    },
    {
      id: 'AE',
      name: 'United Arab Emirates',
      capital: 'Abu Dhabi',
      phone: '971',
      currency: 'AED'
    },
  ];

  constructor() { }

  selectedItems($event) {
    console.log($event);
  }

  ngOnInit() {
  }
}
