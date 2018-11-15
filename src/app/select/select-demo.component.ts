import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.less']
})
export class SelectDemoComponent implements OnInit {
  DemoTypeSelectBaseCode = require('!!raw-loader!./select-demo-base.component.ts');
  DemoTypeSelectSizeCode = require('!!raw-loader!./select-demo-size.component.ts');
  DemoTypeSelectMultipleCode = require('!!raw-loader!./select-demo-multiple.component.ts');
  DemoTypeSelectCustomCode = require('!!raw-loader!./select-demo-custom.component.ts');
  DemoTypeSelectListSearchCode = require('!!raw-loader!./select-demo-list-search.component.ts');
  DemoTypeSelectSearchCode = require('!!raw-loader!./select-demo-search.component.ts');
  DemoTypeSelectCustomSearchCode = require('!!raw-loader!./select-demo-custom-search.component.ts');
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
