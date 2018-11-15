import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import { RouterModule } from '@angular/router';

import { DropDownDemoRoutingModule } from './dropdown-demo-routing.module';
import { DropDownDemoComponent } from './dropdown-demo.component';

import { BgxDropdownSearchModule } from './../../components/dropdown-search/bgx-dropdown-search.module';


import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';
import { NgZorroAntdModule} from 'ng-zorro-antd';

import { DropdownDemoBaseComponent } from './dropdown-demo-base.component';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropDownDemoRoutingModule,
    BgxDropdownSearchModule,
    HttpModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule,
    NgZorroAntdModule,
    QuestionModule
  ],
  declarations: [DropDownDemoComponent, DropdownDemoBaseComponent]
})
export class DropDownDemoModule { }
