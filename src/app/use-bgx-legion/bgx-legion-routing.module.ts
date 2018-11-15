import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BgxLegionComponent } from './bgx-legion.component';

const routes: Routes = [
  {
    path: '', component: BgxLegionComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BgxLegionRoutingModule { }
