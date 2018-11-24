import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BgxLegionComponent } from './bgx-legion.component';
import { BgxLegionRoutingModule } from './bgx-legion-routing.module';

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
