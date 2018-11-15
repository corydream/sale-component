import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-select-demo',
  templateUrl: './tree-select-demo.component.html',
  styleUrls: ['./tree-select-demo.component.less']
})
export class BgxDemoTreeSelectComponent implements OnInit {
  treeSelectBaseCode = require('!!raw-loader!./tree-select-demo-base.component.ts');
  treeSelectSizeCode = require('!!raw-loader!./tree-select-demo-size.component.ts');
  treeSelectSingleCode = require('!!raw-loader!./tree-select-demo-single.component.ts');
  treeSelectNoFilterCode = require('!!raw-loader!./tree-select-demo-nofilter1.component.ts');
  treeSelectShowParentCode = require('!!raw-loader!./tree-select-demo-show-parent.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');

  constructor() { }

  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
