import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinputComponent } from './cinput.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    CinputComponent,
],
  exports: [
    CinputComponent,
    OverlayModule
  ]
})
export class CinputModule { }
