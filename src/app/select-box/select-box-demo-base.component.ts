import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo1',
  template: `
  <bgx-select-box name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children"
    [(ngModel)]="multipleSelected" placeholder="Placeholder" #multipleSelect="ngModel" (ngModelChange)="change($event)"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter" [bgxDisabled]="disabled">
  </bgx-select-box>
  `,
  styles: []
})
export class BgxDemoSelectBoxBaseComponent implements OnInit {
  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public disabled = false;
  public placeholder = '请选择国家';
  public filterPlaceholder = 'Type here to filter elements...';

  public multipleSelected = [
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

  change($event) {
    console.log($event);
  }

  ngOnInit() { }
}
