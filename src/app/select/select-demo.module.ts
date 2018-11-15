import { SelectDemoCustomSearchComponent } from './select-demo-custom-search.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDemoComponent } from './select-demo.component';
import { SelectDemoRoutingModule } from './select-demo-routing.module';
import { HttpModule} from '@angular/http';

//
import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { BgxSelectModule } from '../../components/select';
//
import { SelectDemoBaseComponent } from './select-demo-base.component';
import { SelectDemoMultipleComponent } from './select-demo-multiple.component';
import { SelectDemoCustomComponent } from './select-demo-custom.component';
import { SelectDemoListSearchComponent } from './select-demo-list-search.component';
import { SelectDemoSizeComponent } from './select-demo-size.component';
import { SelectDemoSearchComponent } from './select-demo-search.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SelectDemoRoutingModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    BgxSelectModule,
    NgZorroAntdModule,
    QuestionModule
  ],
  declarations: [
    SelectDemoComponent,
    SelectDemoBaseComponent,
    SelectDemoMultipleComponent,
    SelectDemoCustomComponent,
    SelectDemoListSearchComponent,
    SelectDemoSizeComponent,
    SelectDemoSearchComponent,
    SelectDemoCustomSearchComponent
  ]
})
export class SelectDemoModule {
}
