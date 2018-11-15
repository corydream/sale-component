import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntHighlightComponent } from './highlight.component';

@NgModule({
  imports     : [ CommonModule ],
  declarations: [ AntHighlightComponent ],
  exports     : [ AntHighlightComponent ]
})
export class AntHighlightModule {

}
