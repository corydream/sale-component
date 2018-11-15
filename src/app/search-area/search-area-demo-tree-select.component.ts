import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TreeSelect } from '../../components/search-area';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sa-demo-tree-select',
  template: `
    <bgx-search-area [bgxOptions]="options" [bgxCommonlyQueried]="false"></bgx-search-area>
  `
})
export class BgxSearchAreaDemoTreeSelectComponent implements OnInit {

  options = [];

  treeItems = [{
    id: 'Cont_AS',
    name: 'Asia',
    children: [
      {
        id: 'AE',
        name: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        phone: '971',
        currency: 'AED'
      },
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
      },
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
    ]
  }];

  constructor() { }

  ngOnInit(): void {
    this.options = [
      new TreeSelect({
        key: 'treeSelect',
        placeholder: 'treeSelect',
        value: [{
          id: 'AE',
          name: 'United Arab Emirates',
          capital: 'Abu Dhabi',
          phone: '971',
          currency: 'AED'
        }],
        type: 'treeSelect',
        items: () => {
          return new Observable(ret => {
            setTimeout(_ => {
              ret.next(this.treeItems)
            }, 2000);
          });
        },
        idField: 'id',
        textField: 'name',
        childrenField: 'children',
        onValueChange: ($event) => {
          console.log($event);
        }
      }),

      new TreeSelect({
        key: 'selectBox',
        placeholder: 'selectBox',
        value: [{
          id: 'AM',
          name: 'Armenia',
          capital: 'Yerevan',
          phone: '374',
          currency: 'AMD'
        }],
        type: 'selectBox',
        items: [{
          id: 'Cont_AS',
          name: 'Asia',
          children: [
            {
              id: 'AE',
              name: 'United Arab Emirates',
              capital: 'Abu Dhabi',
              phone: '971',
              currency: 'AED'
            },
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
            },
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
          ]
        }],
        idField: 'id',
        textField: 'name',
        childrenField: 'children',
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
    ];
  }
}
