import { Component, OnInit } from '@angular/core';
import { BgxQueryContentItem } from '../../components/dropdown-search';
@Component({
  selector: 'app-dropdown-demo-base',
  template: `
    <input nz-input [(ngModel)]="searchData.title" placeholder="请输入标题">
    <nz-select [(ngModel)]="searchData.name" nzAllowClear nzPlaceHolder="请选择姓名">
      <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      <nz-option nzValue="disabled" nzLabel="Disabled"></nz-option>
    </nz-select>
    <nz-input-number [(ngModel)]="searchData.num" [nzMin]="1" [nzMax]="10" [nzStep]="1" nzPlaceHolder="请输入数字"></nz-input-number>
    <nz-date-picker [(ngModel)]="searchData.time"></nz-date-picker>
    <bgx-dropdown-search
    bgxId='bgxlegion_test'
    [bgxContent]="content"
    (bgxOnClick)="bgxOnClick($event)"
    ></bgx-dropdown-search>
    <button nz-button (click)="reset()">重置</button>
  `,
  styles: [`
    input,nz-select,nz-date-picker,nz-input-number{
      width: 150px;
      margin-right: 10px;
    }
    bgx-dropdown-search{
      margin-right: 10px;
    }
  `]

})
export class DropdownDemoBaseComponent implements OnInit {
  searchData = {
    name: null,
    title: '',
    time: '',
    num: ''
  }
  constructor(
  ) {

  }
  ngOnInit() {
  }
  content = () => {
    let contentArr = [];
    for (let key in this.searchData) {
      if (this.searchData.hasOwnProperty(key)) {
        if (this.searchData[key]) {
          contentArr.push({
            name: key,
            value: this.searchData[key]
          } as BgxQueryContentItem)
        }
      }
    }
    return contentArr;
  }
  bgxOnClick(event) {
    if (event) {
      event.forEach(item => {
        this.searchData[item.name] = item.value;
      });
    }
  }
  reset() {
    this.searchData = {
      name: null,
      title: '',
      time: '',
      num: ''
    }
  }
}
