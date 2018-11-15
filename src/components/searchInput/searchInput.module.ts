import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './searchInput.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChineseToPinyinService } from './chineseToPinyin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    SearchInputComponent
],
  exports: [
    SearchInputComponent,
    OverlayModule
  ],
  providers: [ChineseToPinyinService]
})
export class SearchInputModule { }
