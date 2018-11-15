import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Select } from '../../components/search-area';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sa-demo-select',
  template: `
    <bgx-search-area [bgxOptions]="options" [bgxCommonlyQueried]="false"></bgx-search-area>
  `
})
export class BgxSearchAreaDemoSelectComponent implements OnInit {

  options = [];

  select = new Select({
    label: '异步加载',
    key: 'nz-select-online',
    placeholder: 'nzSelect',
    value: ['1'],
    type: 'nz',
    mode: 'multiple',
    items: () => {
      return new Observable(ret => {
        setTimeout(_ => {
          ret.next([
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
          ])
        }, 2000);
      });
    },
    onValueChange: ($event) => {
      console.log($event);
    },
  });

  bgxSelect = new Select({
    key: 'bgx-select-online',
    value: [],
    mode: 'multiple',
    placeholder: 'bgxSelect',
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
    onValueChange: ($event) => {
      console.log($event);
    },
    isLoading: false,
    serverSearch: true,
    onSearch: ($event) => {
      this.bgxSelect.isLoading = true;
      if ($event) {
        setTimeout(() => {
            let selecteOptions = [];
            for (let i = 15; i < 35; i++) {
                selecteOptions.push({
                    label: `bgx-select-${i}`,
                    value: `${i}`
                })
            }
            this.bgxSelect.items = selecteOptions;
            this.bgxSelect.isLoading = false;
        }, 1500);
      }
    }
  })

  constructor() { }

  ngOnInit(): void {
    this.options = [
      new Select({
        key: 'bgx-select',
        value: [],
        mode: 'multiple',
        placeholder: 'bgxSelect',
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
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
      new Select({
        key: 'nz-select',
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
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
      this.select,
      this.bgxSelect
    ];
  }
}
