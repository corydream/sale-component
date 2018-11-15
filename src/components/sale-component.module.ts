import { NgModule, ModuleWithProviders } from '@angular/core';

import { SearchInputModule } from './searchInput/searchInput.module';
import { SaleTreeModule } from './sale-tree/sale-tree.module';
import { CinputModule } from './cinput/cinput.module';
export  *  from './sale-tree';
export  *  from './searchInput';
export  *  from './cinput';

@NgModule({
  exports: [
    SearchInputModule,
    SaleTreeModule,
    CinputModule
  ]
})
export class SaleComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SaleComponentModule
    };
  }
 }


