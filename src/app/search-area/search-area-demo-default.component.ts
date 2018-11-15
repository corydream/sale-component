import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BasicOption, Textbox, Select, TreeSelect, DatePicker, Checkbox, Render } from '../../components/search-area/controls';

@Component({
  selector: 'app-sa-demo-default',
  template: `
    <bgx-search-area [bgxId]="'search_area_test1300'" [bgxSortId]="'search_area_test1301'" [bgxOptions]="options" (bgxOnSearch)="onSearch($event)"></bgx-search-area>
    <ng-template #renderTemplate>
      <nz-input-group nzCompact>
        <nz-select [(ngModel)]="province">
          <nz-option [nzLabel]="'Zhejiang'" [nzValue]="'Zhejiang'"></nz-option>
          <nz-option [nzLabel]="'Guangzhou'" [nzValue]="'Guangzhou'"></nz-option>
        </nz-select>
        <input type="text" nz-input [(ngModel)]="city" style="width:300px;">
      </nz-input-group>
    </ng-template>
    `
})
export class BgxSearchAreaDemoDefaultComponent implements OnInit {

  options: BasicOption<any>[] = [];

  province = 'Zhejiang';
  city = 'Xihu District, Hangzhou';
  @ViewChild('renderTemplate') renderTemplate: TemplateRef<void>;

  select = new Select({
    key: 'nzSelect',
    placeholder: 'nzSelect',
    value: [],
    type: 'nz',
    mode: 'multiple',
    items: [
      {
        label: 'Charles',
        value: '1'
      },
      {
        label: 'John',
        value: '2'
      },
      {
        label: 'Jay',
        value: '3'
      }
    ],
    order: 2,
    onValueChange: ($event) => {
      console.log($event);
    },
    isLoading: false,
    serverSearch: true,
    onSearch: ($event) => {
      this.select.isLoading = true;
      setTimeout(() => {
          let selecteOptions = [];
          for (let i = 15; i < 35; i++) {
              selecteOptions.push({
                label: `nz-select-${i}`,
                value: `${i}`
              })
          }
          this.select.items = selecteOptions;
          this.select.isLoading = false;
      }, 2000);
    }
  });

  constructor() { }

  onSearch($event) {
    console.log($event);
  }


  ngOnInit(): void {
    this.options = [
      new Textbox({
        key: 'input',
        placeholder: 'First name',
        value: 'Bombasto',
        onKeyupOfEnter: ($event) => {
          console.log($event);
        },
        prefixIcon: 'anticon anticon-user',
        type: 'textarea',
        order: 1
      }),

      this.select,

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
        order: 6,
        onValueChange: ($event) => {
          console.log($event);
        }
      }),

      new TreeSelect({
        key: 'selectBox',
        placeholder: 'selectBox',
        value: [{
          id: 'BN',
          name: 'Brunei',
          capital: 'Bandar Seri Begawan',
          phone: '673',
          currency: 'BND'
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
        order: 7,
        onValueChange: ($event) => {
          console.log($event);
        }
      }),

      new DatePicker({
        key: 'date',
        value: null,
        type: 'range',
        format: 'yyyy-MM-dd',
        onValueChange: ($event) => {
          console.log($event);
        },
        order: 3,
        onOk: ($event) => {
          console.log($event);
        }
      }),

      new Checkbox({
        key: 'checkbox',
        label: 'Apple',
        order: 5,
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
      new Render({
        key: 'city',
        value: {
          province: this.province,
          city: this.city
        },
        order: 9,
        renderContent: this.renderTemplate
      }),
      new Checkbox({
        key: 'checkbox1',
        label: 'Apple3',
        order: 10,
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
    ];
  }
}
