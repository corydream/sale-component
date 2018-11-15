

import { NgModule } from '@angular/core';

import { QuestionComponent } from './question.component';
import { CommonModule } from '@angular/common';
import { QuestionService } from './question.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    exports: [QuestionComponent],
    declarations: [QuestionComponent],
    providers: [QuestionService]
})
export class QuestionModule { }
