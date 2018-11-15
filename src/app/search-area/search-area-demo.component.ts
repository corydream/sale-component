import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sa-demo',
  templateUrl: './search-area-demo.component.html',
  styleUrls: ['./search-area-demo.component.less']
})
export class BgxSearchAreaDemoComponent implements OnInit {

  saDefaultCode = require('!!raw-loader!./search-area-demo-default.component.ts');
  saTextboxCode = require('!!raw-loader!./search-area-demo-textbox.component.ts');
  saSelectCode = require('!!raw-loader!./search-area-demo-select.component.ts');
  saTreeSelectCode = require('!!raw-loader!./search-area-demo-tree-select.component.ts');
  saDatePickerCode = require('!!raw-loader!./search-area-demo-date-picker.component.ts');
  saCheckboxCode = require('!!raw-loader!./search-area-demo-checkbox.component.ts');
  saRenderCode = require('!!raw-loader!./search-area-demo-render.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');
  constructor() {}
  ngOnInit() {}
  goLink(link: string) {
    window.location.hash = link;
  }
}
