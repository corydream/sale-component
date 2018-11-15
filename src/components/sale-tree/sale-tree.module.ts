import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SaleTreeNodeComponent } from './sale-tree-node.component';
import { SaleTreeComponent } from './sale-tree.component';

@NgModule({
  imports     : [
    CommonModule
  ],
  declarations: [
    SaleTreeComponent,
    SaleTreeNodeComponent
  ],
  exports     : [
    SaleTreeComponent,
    SaleTreeNodeComponent
  ]
})

export class SaleTreeModule {

}
