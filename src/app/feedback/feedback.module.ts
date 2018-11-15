import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FeedbackComponent } from './feedback.component';
import { FeedbackService } from './feedback.service';
import { BgxUEditorModule } from '../../components/ueditor/bgx-ueditor.module';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BgxUEditorModule
    ],
    exports: [FeedbackComponent],
    declarations: [FeedbackComponent],
    entryComponents: [FeedbackComponent],
    providers: [FeedbackService],
})
export class FeedbackModule { }
