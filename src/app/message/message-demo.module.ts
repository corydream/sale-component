import { MessageDemoLoadingComponent } from './message-demo-loading.component';
import { MessageDemoDurationComponent } from './message-demo-duration.component';
import { MessageDemoOtherComponent } from './message-demo-other.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDemoComponent } from './message-demo.component';
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { BgxMessageService, BgxMessageModule } from '../../components/message';
import { MessageDemoBaseComponent } from './message-demo-base.component';
import { MessageDemoRoutingModule } from './message-demo-routing.module';
import { QuestionModule } from '../question/question.module';
@NgModule({
  imports: [
    CommonModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    BgxMessageModule,
    MessageDemoRoutingModule,
    QuestionModule
  ],
  declarations: [
    MessageDemoComponent,
    MessageDemoBaseComponent,
    MessageDemoOtherComponent,
    MessageDemoDurationComponent,
    MessageDemoLoadingComponent
  ],
  providers: [BgxMessageService]
})
export class MessageDemoModule { }
