import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleSearchtipComponent } from './sale-searchtip.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChineseToPinyinService } from './chineseToPinyin.service';
import { OffClickModule } from '../core/off-click/off-click.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    OffClickModule
  ],
  declarations: [
    SaleSearchtipComponent
],
  exports: [
    SaleSearchtipComponent,
    OverlayModule
  ],
  providers: [ChineseToPinyinService]
})
export class SaleSearchtipModule { }
