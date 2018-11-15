import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AntHighlightModule, AntCodeBoxModule, MarkdownModule } from '../share/';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BgxModalDemoComponent } from './modal-demo.component';
import { BgxDemoModalBasicComponent } from './modal-demo-basic.component';
// import { BgxLegionModule } from 'sale-component';
import { BgxDemoModalAsyncComponent } from './modal-demo-async.component';
import { BgxDemoModalConfirmComponent } from './modal-demo-confirm.component';
import { BgxDemoModalConfirmPromiseComponent } from './modal-demo-confirm-promise.component';
import { BgxDemoModalFooterComponent } from './modal-demo-footer.component';
import { BgxDemoModalInfoComponent } from './modal-demo-info.component';
import { BgxDemoModalManualComponent } from './modal-demo-manual.component';
import { BgxDemoModalPositionComponent } from './modal-demo-position.component';
import { BgxDemoModalServiceComponent, BgxModalCustomComponent } from './modal-demo-service.component';
import { BgxDemoModalReconfirmComponent } from './modal-demo-reconfirm.component';
import { BgxDemoModalMousemoveComponent } from './modal-demo-mousemove.component';
import { BgxModalModule } from '../../components/modal/bgx-modal.module';
import { QuestionModule } from '../question/question.module';


const routes: Routes = [
  { path: '', component: BgxModalDemoComponent },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    BgxModalModule,
    QuestionModule
  ],
  declarations: [
    BgxModalDemoComponent,
    BgxDemoModalBasicComponent,
    BgxDemoModalAsyncComponent,
    BgxDemoModalConfirmComponent,
    BgxDemoModalConfirmPromiseComponent,
    BgxDemoModalFooterComponent,
    BgxDemoModalInfoComponent,
    BgxDemoModalManualComponent,
    BgxDemoModalPositionComponent,
    BgxDemoModalServiceComponent,
    BgxDemoModalReconfirmComponent,
    BgxModalCustomComponent,
    BgxDemoModalMousemoveComponent
  ],
  entryComponents: [BgxModalCustomComponent]
})
export class BgxModalDemoModule { }
