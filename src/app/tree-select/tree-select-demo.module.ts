import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BgxTreeDemoRoutingModule } from './tree-select-demo-routing.module';
import { BgxDemoTreeSelectComponent } from './tree-select-demo.component';
import { BgxDemoTreeSelectBaseComponent } from './tree-select-demo-base.component';
import { BgxDemoTreeSelectSingleComponent } from './tree-select-demo-single.component';
import { BgxDemoTreeSelectNoFilterComponent } from './tree-select-demo-nofilter1.component';

import { BgxTreeSelectModule } from '../../components/tree-select';
import { BgxDemoTreeSelectSizeComponent } from './tree-select-demo-size.component';
import { BgxDemoTreeSelectShowParentComponent } from './tree-select-demo-show-parent.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BgxTreeDemoRoutingModule,
    BgxTreeSelectModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    QuestionModule
  ],
  declarations: [
    BgxDemoTreeSelectComponent,
    BgxDemoTreeSelectBaseComponent,
    BgxDemoTreeSelectSingleComponent,
    BgxDemoTreeSelectNoFilterComponent,
    BgxDemoTreeSelectSizeComponent,
    BgxDemoTreeSelectShowParentComponent
  ]
})
export class BgxDemoTreeSelectModule { }
