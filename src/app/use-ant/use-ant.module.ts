import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseAntRoutingModule } from './use-ant-routing.module';
import { UseAntComponent } from './use-ant.component';

import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    UseAntRoutingModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule
  ],
  declarations: [UseAntComponent]
})
export class UseAntModule { }
