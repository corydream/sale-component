import { Component, OnInit } from '@angular/core';
import { FlatCountries } from '../tree-select/sigle-data';
import { HierarchicalCountries } from '../tree-select/tree-data';

@Component({
  selector: 'app-select-box-demo',
  templateUrl: './select-box-demo.component.html',
  styleUrls: ['./select-box-demo.component.less']
})
export class BgxDemoSelectBoxComponent implements OnInit {

  selectBoxBaseCode = require('!!raw-loader!./select-box-demo-base.component.ts');
  selectBoxNoFilterCode = require('!!raw-loader!./select-box-demo-nofilter1.component.ts');
  selectBoxOpenCode = require('!!raw-loader!./select-box-demo-open.component.ts');
  selectBoxSortCode = require('!!raw-loader!./select-box-demo-sort.component.ts');
  selectBoxSizeCode = require('!!raw-loader!./select-box-demo-size.component.ts');
  selectBoxShowParentCode = require('!!raw-loader!./select-box-demo-show-parent.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');

  constructor() { }

  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
