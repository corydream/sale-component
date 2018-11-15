import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DragAndDropDemoRoutingModule } from './dnd-demo-routing.module';

import { COMPONENTS } from './index';

import { DndModule } from '../../components/drag-and-drop/dnd.module'

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    DragAndDropDemoRoutingModule,
    DndModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule
  ],
})
export class DndDemoModule { }
