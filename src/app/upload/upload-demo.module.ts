import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { UploadRoutes } from './upload.routing';
import { AntHighlightModule } from '../share';
import { MarkdownModule } from '../share';
import { AntCodeBoxModule } from '../share';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { UploadDemoBaseComponent } from './upload-demo-base.component';
import { BgxUploadModule } from '../../components/upload';
import { HttpClientModule } from '@angular/common/http';
import { UploadDemoAvatarComponent } from './upload-demo-avatar.component';
import { UploadDemoFileListComponent } from './upload-demo-fileList.component';
import { UploadDemoMultipleComponent } from './upload-demo-multiple.component';
import { UploadDemoDragComponent } from './upload-demo-drag.component';
import { UploadDemoManuallyComponent } from './upload-demo-manually.component';
import { HttpModule } from '@angular/http';
import { UploadDemoBusinessComponent } from './upload-demo-business.component';
import { QuestionModule } from '../question/question.module';
@NgModule({
  imports: [
    CommonModule,
    UploadRoutes,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BgxUploadModule,
    HttpModule,
    QuestionModule
  ],
  declarations: [
    UploadComponent,
    UploadDemoBaseComponent,
    UploadDemoAvatarComponent,
    UploadDemoFileListComponent,
    UploadDemoMultipleComponent,
    UploadDemoDragComponent,
    UploadDemoManuallyComponent,
    UploadDemoBusinessComponent
  ],
  providers: []
})
export class UploadDemoModule { }
