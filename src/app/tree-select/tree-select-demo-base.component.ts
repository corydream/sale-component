import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from './tree-data';

@Component({
  selector: 'app-tree-select-demo1',
  template: `
  <bgx-tree-select name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children" [bgxMultiple]="true"
    [(ngModel)]="multipleSelected" bgxPlaceholder="placeholder" [bgxAllowParentSelection]="allowParentSelection" #multipleSelect="ngModel"
    [bgxFilterPlaceholder]="filterPlaceholder" bgxShowBoxHeight="120" [bgxAllowFilter]="showFilter" [bgxDisabled]="disabled"
    (ngModelChange)="selectedItems($event)" [bgxOnlyShowParent]="false">
    </bgx-tree-select>
  `,
})
export class BgxDemoTreeSelectBaseComponent implements OnInit {
  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public disabled = false;
  public placeholder = '请选择国家';
  public filterPlaceholder = 'Type here to filter elements...';

  public multipleSelected = [
    {
      id: 'BF',
      name: 'Burkina Faso',
      capital: 'Ouagadougou',
      phone: '226',
      currency: 'XOF'
    },
    {
      id: 'BI',
      name: 'Burundi',
      capital: 'Bujumbura',
      phone: '257',
      currency: 'BIF'
    }
  ];
  constructor() { }

  selectedItems($event) {
    console.log($event);
  }

  ngOnInit() {
  }
}
