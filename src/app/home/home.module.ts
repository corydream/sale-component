import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


import { AntHighlightModule } from '../share/';
import { MarkdownModule } from '../share/';
import { AntCodeBoxModule } from '../share/';

import { DemoHomeTestComponent } from './home-test.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AntHighlightModule,
    MarkdownModule,
    AntCodeBoxModule
  ],
  declarations: [HomeComponent, DemoHomeTestComponent]
})
export class HomeModule { }
