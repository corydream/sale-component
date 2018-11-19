import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OverlayModule } from '@angular/cdk/overlay';
import { SaleTooltipComponent } from './sale-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    SaleTooltipComponent,
],
  exports: [
    SaleTooltipComponent,
    OverlayModule
  ]
})
export class SaleTooltipModule { }
