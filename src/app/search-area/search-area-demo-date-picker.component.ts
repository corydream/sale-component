import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatePicker } from '../../components/search-area';

@Component({
  selector: 'app-sa-demo-date-picker',
  template: `
    <bgx-search-area [bgxOptions]="options" [bgxCommonlyQueried]="false"></bgx-search-area>
  `
})
export class BgxSearchAreaDemoDatePickerComponent implements OnInit {

  options = [];


  constructor() { }

  ngOnInit(): void {
    this.options = [
      new DatePicker({
        key: 'date',
        value: null,
        onValueChange: ($event) => {
          console.log($event);
        },
        onOk: ($event) => {
          console.log($event);
        }
      }),
      new DatePicker({
        key: 'range',
        value: null,
        type: 'range',
        format: 'yyyy-MM-dd HH:mm',
        onValueChange: ($event) => {
          console.log($event);
        },
        onOk: ($event) => {
          console.log($event);
        }
      }),
      new DatePicker({
        key: 'week',
        value: null,
        type: 'week',
        placeholder: '请选择星期',
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
    ];
  }
}
