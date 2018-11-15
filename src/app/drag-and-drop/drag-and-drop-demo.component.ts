import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-demo',
  templateUrl: './drag-and-drop-demo.component.html',
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DragAndDropDemoComponent implements OnInit {
  dndSimpleCode = require('!!raw-loader!./dnd-demo-simple.component.ts');
  dndZoneCode = require('!!raw-loader!./dnd-demo-zone.component.ts');
  dndCustomDataCode = require('!!raw-loader!./dnd-demo-custom-data.component.ts');
  dndCustomFuncCode = require('!!raw-loader!./dnd-demo-custom-func.component.ts');
  dndShoppingCode = require('!!raw-loader!./dnd-demo-shopping.component.ts');
  dndSortSimpleCode = require('!!raw-loader!./dnd-demo-sort-simple.component.ts');
  dndSortCopyCode = require('!!raw-loader!./dnd-demo-sort-copy.component.ts');
  dndMultiSortCode = require('!!raw-loader!./dnd-demo-multi-sort.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');
  constructor() { }

  ngOnInit() {
  }

}
