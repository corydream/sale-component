import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BgxLegionRoutingModule } from './bgx-legion-routing.module';
import { BgxLegionComponent } from './bgx-legion.component';

import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    BgxLegionRoutingModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule
  ],
  declarations: [BgxLegionComponent]
})
export class BgxLegionModule { }
