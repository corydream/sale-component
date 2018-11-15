import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BgxEditorModule } from '../../components/editor';
import { EditorDemoRoutingModule } from './editor-demo-routing.module';
import { COMPONENTS } from './index'

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BgxEditorModule,
    EditorDemoRoutingModule,
    FormsModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule
  ],
  exports: COMPONENTS,
  providers: [],
})
export class EditorDemoModule { }
