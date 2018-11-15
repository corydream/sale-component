import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgxSearchAreaDemoComponent } from './search-area-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AntHighlightModule, AntCodeBoxModule, MarkdownModule } from '../share/';
import { BgxSearchAreaDemoDefaultComponent } from './search-area-demo-default.component';
import { BgxSearchAreaModule } from '../../components/search-area/search-area.module';
import { BgxSearchAreaDemoCheckboxComponent } from './search-area-demo-checkbox.component';
import { BgxSearchAreaDemoRenderComponent } from './search-area-demo-render.component';
import { BgxSearchAreaDemoTreeSelectComponent } from './search-area-demo-tree-select.component';
import { BgxSearchAreaDemoTextboxComponent } from './search-area-demo-textbox.component';
import { BgxSearchAreaDemoDatePickerComponent } from './search-area-demo-date-picker.component';
import { BgxSearchAreaDemoSelectComponent } from './search-area-demo-select.component';
const routes: Routes = [
  { path: '', component: BgxSearchAreaDemoComponent },
];

@NgModule({
  declarations: [
    BgxSearchAreaDemoComponent,
    BgxSearchAreaDemoDefaultComponent,
    BgxSearchAreaDemoCheckboxComponent,
    BgxSearchAreaDemoRenderComponent,
    BgxSearchAreaDemoTreeSelectComponent,
    BgxSearchAreaDemoTextboxComponent,
    BgxSearchAreaDemoDatePickerComponent,
    BgxSearchAreaDemoSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    BgxSearchAreaModule,
  ],
  exports: [],
  providers: [],
})
export class SearchAreaDemoModule {}
