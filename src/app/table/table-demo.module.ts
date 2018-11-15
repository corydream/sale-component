import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { TableDemoRoutingModule } from './table-demo-routing.module';
import { BgxTableDemoComponent } from './table-demo.component';

import { AntCodeBoxModule, MarkdownModule, AntHighlightModule } from './../share';
import { BgxTableModule } from '../../components/table/nz-table.module';
import {
//   NzGridModule,
//   NzDividerModule,
//   NzCheckboxModule,
//   NzSwitchModule,
//   NzButtonModule,
//   NzDropDownModule,
//   NzFormModule,
//   NzRadioModule,
//   NzPopconfirmModule,
//   NzBadgeModule,
//   NzAffixModule,
//   NzAnchorModule,
//   NzInputModule
  NgZorroAntdModule
} from 'ng-zorro-antd';
import { BgxDemoTableBaseComponent } from './demo/table-demo-base.component';
import { BgxDemoTableAjaxComponent } from './demo/table-demo-ajax.component';
import { BgxDemoTableBorderedComponent } from './demo/table-demo-bordered.component';
import { BgxDemoTableColspanRowspanComponent } from './demo/table-demo-colspan-rowspan.component';
import { BgxDemoTableCustomFilterPanelComponent } from './demo/table-demo-custom-filter-panel.component';
import { BgxDemoTableDynamicSettingsComponent } from './demo/table-demo-dynamic-settings.component';
import { BgxDemoTableEditCellComponent } from './demo/table-demo-edit-cell.component';
import { BgxDemoTableExpandChildrenComponent } from './demo/table-demo-expand-children.component';
import { BgxDemoTableExpandComponent } from './demo/table-demo-expand.component';
import { BgxDemoTableFixedColumnsHeaderComponent } from './demo/table-demo-fixed-columns-header.component';
import { BgxDemoTableFixedColumnsComponent } from './demo/table-demo-fixed-columns.component';
import { BgxDemoTableFixedHeaderComponent } from './demo/table-demo-fixed-header.component';
import { BgxDemoTableGroupingColumnsComponent } from './demo/table-demo-grouping-columns.component';
import { BgxDemoTableHeadComponent } from './demo/table-demo-head.component';
import { BgxDemoTableNestedTableComponent } from './demo/table-demo-nested-table.component';
import { BgxDemoTableResetFilterComponent } from './demo/table-demo-reset-filter.component';
import { BgxDemoTableRowSelectionAndOperationComponent } from './demo/table-demo-row-selection-and-operation.component';
import { BgxDemoTableRowSelectionComponent } from './demo/table-demo-row-selection.component';
import { BgxDemoTableRowSelectionCustomComponent } from './demo/table-demo-row-selection-custom.component';
import { BgxDemoTableSizeComponent } from './demo/table-demo-size.component';
import { HttpClientModule } from '@angular/common/http';
import { BgxDemoTableEditRowComponent } from './demo/table-demo-edit-row.component';
import { BgxDemoTableDragComponent } from './demo/table-demo-drag.component';
import { BgxDemoTableGroupingColumnsAndDragComponent } from './demo/table-demo-grouping-columns-and-drag.component';
import { BgxDemoTablePageLeftContentComponent } from './demo/table-demo-page-left-content.component';
import { QuestionModule } from '../question/question.module';
// import { NgZorroAntdModule } from '../../../third';

const COMPONENTS = [
  BgxDemoTableBaseComponent,
  BgxDemoTableDragComponent,
  BgxDemoTableAjaxComponent,
  BgxDemoTableBorderedComponent,
  BgxDemoTableColspanRowspanComponent,
  BgxDemoTableCustomFilterPanelComponent,
  BgxDemoTableDynamicSettingsComponent,
  BgxDemoTableEditCellComponent,
  BgxDemoTableEditRowComponent,
  BgxDemoTableExpandChildrenComponent,
  BgxDemoTableExpandComponent,
  BgxDemoTableFixedColumnsHeaderComponent,
  BgxDemoTableFixedColumnsComponent,
  BgxDemoTableFixedHeaderComponent,
  BgxDemoTableGroupingColumnsComponent,
  BgxDemoTableGroupingColumnsAndDragComponent,
  BgxDemoTableHeadComponent,
  BgxDemoTableNestedTableComponent,
  BgxDemoTableResetFilterComponent,
  BgxDemoTableRowSelectionAndOperationComponent,
  BgxDemoTableRowSelectionComponent,
  BgxDemoTableRowSelectionCustomComponent,
  BgxDemoTableSizeComponent,
  BgxDemoTablePageLeftContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TableDemoRoutingModule,
    NgZorroAntdModule,
    BgxTableModule,
    AntCodeBoxModule, MarkdownModule, AntHighlightModule,
    QuestionModule
    // NzGridModule,
    // NzDividerModule,
    // NzCheckboxModule,
    // NzSwitchModule,
    // NzButtonModule,
    // NzDropDownModule,
    // NzFormModule,
    // NzRadioModule,
    // NzPopconfirmModule,
    // NzBadgeModule,
    // NzAffixModule,
    // NzAnchorModule,
    // NzInputModule
  ],
  declarations: [BgxTableDemoComponent, ...COMPONENTS]
})
export class TableDemoModule { }
