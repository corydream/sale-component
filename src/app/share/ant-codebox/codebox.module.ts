import { NgModule } from '@angular/core';
import { CodeBoxComponent } from './codebox.component';
import { CommonModule } from '@angular/common';
import { AntHighlightModule } from '../ant-highlight/highlight.module';


import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  imports     : [ CommonModule, AntHighlightModule, NgZorroAntdModule ],
  declarations: [ CodeBoxComponent ],
  exports     : [ CodeBoxComponent ]
})

export class AntCodeBoxModule {
}

