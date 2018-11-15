import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffClickDirective } from './off-click.directive'
@NgModule({
  declarations: [OffClickDirective],
  imports: [ CommonModule ],
  exports: [OffClickDirective],
  providers: [],
})
export class OffClickModule {}
