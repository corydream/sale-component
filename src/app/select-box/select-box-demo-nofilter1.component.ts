import { Component, OnInit } from '@angular/core';
/* 静态资源 */
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo2',
  template: `
  <bgx-select-box name="multipleSelect" [bgxItems]="items" bgxIdField="id" bgxTextField="name" bgxChildrenField="children"
    [(ngModel)]="multipleSelected" placeholder="Placeholder" #multipleSelect="ngModel"
    [bgxAllowFilter]="false" [bgxDisabled]="disabled" >
  </bgx-select-box>
  `,
  styles: []
})
export class BgxDemoSelectBoxNoFilterComponent implements OnInit {

  public items = HierarchicalCountries;
  public allowParentSelection = true;
  public disabled = false;
  public placeholder = '请选择国家';

  public multipleSelected = [
    {
      id: 'BJ',
      name: 'Benin',
      capital: 'Porto-Novo',
      phone: '229',
      currency: 'XOF'
    },
    {
      id: 'BW',
      name: 'Botswana',
      capital: 'Gaborone',
      phone: '267',
      currency: 'BWP'
    },
  ];
  constructor() { }

  ngOnInit() { }
}
