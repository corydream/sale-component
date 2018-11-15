import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BgxViewerModule, BgxViewerService } from '../../components/viewer/index';

import { AntHighlightModule } from '../share';
import { MarkdownModule } from '../share';
import { AntCodeBoxModule } from '../share';
import { NgZorroAntdModule} from 'ng-zorro-antd';

import { ViewerDemoBaseComponent } from './viewer-demo-base.component';
import { ViewerDemoRoutingModule } from './viewer-demo-routing.module';
import { ViewerDemoComponent } from './viewer-demo.component';
import { ViewerDemoContentComponent } from './viewer-demo-content.component';
import { QuestionModule } from '../question/question.module';


@NgModule({
  imports: [
    CommonModule,
    BgxViewerModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    ViewerDemoRoutingModule,
    QuestionModule
  ],
  declarations: [ ViewerDemoComponent, ViewerDemoBaseComponent, ViewerDemoContentComponent],
  providers: [BgxViewerService]
})
export class ViewerDemoModule {
 }