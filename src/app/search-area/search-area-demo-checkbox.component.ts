import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Checkbox, Render } from '../../components/search-area';

@Component({
  selector: 'app-sa-demo-checkbox',
  template: `
    <bgx-search-area [bgxOptions]="options" [bgxCommonlyQueried]="false"></bgx-search-area>
    <ng-template #checkboxGroupTemplate>
      <span>Checkbox组：</span>
    </ng-template>
  `
})
export class BgxSearchAreaDemoCheckboxComponent implements OnInit {

  options = [];

  @ViewChild('checkboxGroupTemplate') checkboxGroupTemplate: TemplateRef<void>;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      new Checkbox({
        key: 'checkbox',
        label: 'Apple',
        value: false,
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
      new Render({
        renderContent: this.checkboxGroupTemplate
      }),
      new Checkbox({
        key: 'checkbox-group',
        value: [
          { label: 'Apple', value: 'Apple', checked: true },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ],
        onValueChange: ($event) => {
          console.log($event);
        }
      }),
    ];
  }
}
