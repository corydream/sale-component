import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo4',
  template: `
  <bgx-select-box name="multipleSelect" [bgxItems]="items" bgxId="id" bgxTextField="name"
  bgxChildrenField="children" [(ngModel)]="multipleSelected" placeholder="Placeholder"
  #multipleSelect="ngModel" [bgxFilterPlaceholder]="bgxFilterPlaceholder" [bgxAllowFilter]="showFilter"
  [bgxSpan]="span" [bgxMaxVisibleItemCount]="maxDisplayed" [bgxDisabled]="disabled" >
  </bgx-select-box>
  `,
  styles: []
})
export class BgxDemoSelectBoxSortComponent implements OnInit {
  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public disabled = false;
  public placeholder = '请选择国家';
  public bgxFilterPlaceholder = 'Type here to filter elements...';
  public maxDisplayed = 5;
  public span = 8;

  public multipleSelected = [
    {
      id: 'AE',
      name: 'United Arab Emirates',
      capital: 'Abu Dhabi',
      phone: '971',
      currency: 'AED'
    },
    {
      id: 'AF',
      name: 'Afghanistan',
      capital: 'Kabul',
      phone: '93',
      currency: 'AFN'
    },
  ];
  constructor() { }

  ngOnInit() { }
}
