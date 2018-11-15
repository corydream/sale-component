import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';
import { BgxUEditorModule } from '../../components/ueditor';

import { UEditorDemoRoutingModule } from './ueditor-demo-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';


import { COMPONENTS } from './index';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    UEditorDemoRoutingModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    BgxUEditorModule
  ],
  exports: [...COMPONENTS],
  providers: [],
})
export class UEditorDemoModule { }
