import { NgModule, ModuleWithProviders } from '@angular/core';

import { SearchInputModule } from './searchInput/searchInput.module';
import { SaleTreeModule } from './sale-tree/sale-tree.module';
import { SaleTooltipModule } from './sale-tooltip/sale-tooltip.module';
export  *  from './sale-tree';
export  *  from './searchInput';
export  *  from './sale-tooltip';

@NgModule({
  exports: [
    SearchInputModule,
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


