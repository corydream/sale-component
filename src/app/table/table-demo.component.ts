import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.less']
})
export class BgxTableDemoComponent implements OnInit {

  demoTableBaseCode = require('!!raw-loader!./demo/table-demo-base.component.ts');
  demoTableDragCode = require('!!raw-loader!./demo/table-demo-drag.component.ts');
  demoTableAjaxCode = require('!!raw-loader!./demo/table-demo-ajax.component.ts');
  demoTableBorderedCode = require('!!raw-loader!./demo/table-demo-bordered.component.ts');
  demoTableColspanRowSpanCode = require('!!raw-loader!./demo/table-demo-colspan-rowspan.component.ts');
  demoTableCustomFilterCode = require('!!raw-loader!./demo/table-demo-custom-filter-panel.component.ts');
  demoTableDynamicSettingsCode = require('!!raw-loader!./demo/table-demo-dynamic-settings.component.ts');
  demoTableEditCellCode = require('!!raw-loader!./demo/table-demo-edit-cell.component.ts');
  demoTableEditRowCode = require('!!raw-loader!./demo/table-demo-edit-row.component.ts');
  demoTableExpandChildrenCode = require('!!raw-loader!./demo/table-demo-expand-children.component.ts');
  demoTableExpandCode = require('!!raw-loader!./demo/table-demo-expand.component.ts');
  demoTableFixedColumnsHeaderCode = require('!!raw-loader!./demo/table-demo-fixed-columns-header.component.ts');
  demoTableFixedColumnsCode = require('!!raw-loader!./demo/table-demo-fixed-columns.component.ts');
  demoTableFixedHeaderCode = require('!!raw-loader!./demo/table-demo-fixed-header.component.ts');
  demoTableGroupingColumnsCode = require('!!raw-loader!./demo/table-demo-grouping-columns.component.ts');
  demoTableGroupingColumnsAndDragCode = require('!!raw-loader!./demo/table-demo-grouping-columns-and-drag.component.ts');
  demoTableHeadCode = require('!!raw-loader!./demo/table-demo-head.component.ts');
  demoTableNestedTableCode = require('!!raw-loader!./demo/table-demo-nested-table.component.ts');
  demoTableResetFilterCode = require('!!raw-loader!./demo/table-demo-reset-filter.component.ts');
  demoTableRowSelectionAndOperationCode = require('!!raw-loader!./demo/table-demo-row-selection-and-operation.component.ts');
  demoTableRowSelectionCustomCode = require('!!raw-loader!./demo/table-demo-row-selection-custom.component.ts');
  demoTableRowSelectionCode = require('!!raw-loader!./demo/table-demo-row-selection.component.ts');
  demoTableSizeCode = require('!!raw-loader!./demo/table-demo-size.component.ts');
  demoTablePageLeftContentCode = require('!!raw-loader!./demo/table-demo-page-left-content.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');
  constructor() {}
  ngOnInit() {}
  goLink(link: string) {
    window.location.hash = link;
  }
}
