import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo6',
  template: `
  <bgx-select-box name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children"
    [(ngModel)]="multipleSelected" placeholder="Placeholder" #multipleSelect="ngModel" (ngModelChange)="change($event)"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter" [bgxOnlyShowParent]="true">
  </bgx-select-box>
  `,
  styles: []
})
export class BgxDemoSelectBoxShowParentComponent implements OnInit {
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

  change($event) {
    console.log($event);
  }

  ngOnInit() { }
}
