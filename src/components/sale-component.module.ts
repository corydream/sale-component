import { NgModule, ModuleWithProviders } from '@angular/core';

import { SaleSearchtipModule } from './sale-searchtip/sale-searchtip.module';
import { SaleTreeModule } from './sale-tree/sale-tree.module';
import { SaleTooltipModule } from './sale-tooltip/sale-tooltip.module';
export  *  from './sale-tree';
export  *  from './sale-searchtip';
export  *  from './sale-tooltip';

@NgModule({
  exports: [
    SaleSearchtipModule,
    SaleTreeModule,
    SaleTooltipModule
  ]
})
export class SaleComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SaleComponentModule
    };
  }
 }


