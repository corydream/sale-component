import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { BgxDemoSelectBoxRoutingModule } from './select-box-demo-routing.module';
import { BgxDemoSelectBoxComponent } from './select-box-demo.component';
import { BgxDemoSelectBoxBaseComponent } from './select-box-demo-base.component';
import { BgxDemoSelectBoxNoFilterComponent } from './select-box-demo-nofilter1.component';
import { BgxDemoSelectBoxOpenComponent } from './select-box-demo-open.component';
import { BgxDemoSelectBoxSortComponent } from './select-box-demo-sort.component';

import { BgxSelectBoxModule } from '../../components/select-box';
import { BgxDemoSelectBoxSizeComponent } from './select-box-demo-size.component';
import { BgxDemoSelectBoxShowParentComponent } from './select-box-demo-show-parent.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BgxDemoSelectBoxRoutingModule,
    BgxSelectBoxModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    QuestionModule
  ],
  declarations: [
    BgxDemoSelectBoxComponent,
    BgxDemoSelectBoxBaseComponent,
    BgxDemoSelectBoxNoFilterComponent,
    BgxDemoSelectBoxOpenComponent,
    BgxDemoSelectBoxSortComponent,
    BgxDemoSelectBoxSizeComponent,
    BgxDemoSelectBoxShowParentComponent
  ]
})
export class BgxDemoSelectBoxModule { }
