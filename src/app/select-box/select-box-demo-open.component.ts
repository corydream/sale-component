import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo3',
  template: `
  <bgx-select-box name="multipleSelect" [bgxItems]="items" bgxId="id" bgxTextField="name"
    bgxChildrenField="children" [(ngModel)]="multipleSelected" placeholder="Placeholder"
    #multipleSelect="ngModel" [bgxFilterPlaceholder]="bgxFilterPlaceholder" [bgxAllowFilter]="showFilter"
    [bgxDisabled]="disabled" [bgxIsOpen]="bgxIsOpen">
  </bgx-select-box>
  `,
  styles: []
})
export class BgxDemoSelectBoxOpenComponent implements OnInit {
  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public showFilter = true;
  public disabled = false;
  public placeholder = '请选择国家';
  public bgxFilterPlaceholder = 'Type here to filter elements...';
  public bgxIsOpen = true;

  public multipleSelected = [
    {
      id: 'AM',
      name: 'Armenia',
      capital: 'Yerevan',
      phone: '374',
      currency: 'AMD'
    },
    {
      id: 'BH',
      name: 'Bahrain',
      capital: 'Manama',
      phone: '973',
      currency: 'BHD'
    }
  ];
  constructor() { }

  ngOnInit() { }
}
