import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Textbox } from '../../components/search-area';

@Component({
  selector: 'app-sa-demo-textbox',
  template: `
    <bgx-search-area [bgxOptions]="options" [bgxCommonlyQueried]="false"></bgx-search-area>
    <ng-template #addOnBeforeTemplate>
      <nz-select [(ngModel)]="value" style="width: 100px">
        <nz-option [nzLabel]="'Http://'" [nzValue]="'Http://'"></nz-option>
        <nz-option [nzLabel]="'Https://'" [nzValue]="'Https://'"></nz-option>
      </nz-select>
    </ng-template>
  `
})
export class BgxSearchAreaDemoTextboxComponent implements OnInit {

  options = [];
  value = 'Https://';

  @ViewChild('addOnBeforeTemplate') addOnBeforeTemplate: TemplateRef<void>;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      new Textbox({
        key: 'bu',
        placeholder: 'Basic usage',
        value: ''
      }),
      new Textbox({
        key: 'bu1',
        placeholder: '前置/后置标签',
        value: '',
        addOnBefore: this.addOnBeforeTemplate,
        addOnAfter: '.com',
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
      new Textbox({
        key: 'bu2',
        placeholder: '前缀',
        value: '',
        prefixIcon: 'anticon anticon-user'
      })
    ]
  }
}
