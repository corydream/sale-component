import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Render } from '../../components/search-area';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sa-demo-render',
  template: `
    <bgx-search-area [bgxOptions]="options" [bgxCommonlyQueried]="false"></bgx-search-area>
    <ng-template #renderTemplate>
      <nz-input-group nzCompact>
        <nz-select [(ngModel)]="provider">
          <nz-option [nzLabel]="'Zhejiang'" [nzValue]="'Zhejiang'"></nz-option>
          <nz-option [nzLabel]="'Jiangsu'" [nzValue]="'Jiangsu'"></nz-option>
        </nz-select>
        <input type="text" nz-input [(ngModel)]="city" style="width:300px;">
      </nz-input-group>
    </ng-template>
  `
})
export class BgxSearchAreaDemoRenderComponent implements OnInit {

  options = [];

  provider = 'Zhejiang';
  city = 'Xihu District, Hangzhou';

  @ViewChild('renderTemplate') renderTemplate: TemplateRef<void>;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      new Render({
        key: 'provider',
        value: {
          provider: this.provider,
          city: this.city
        },
        renderContent: this.renderTemplate
      })
    ];
  }
}
