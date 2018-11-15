import { BgxDemoTreeSelectComponent } from './tree-select-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: BgxDemoTreeSelectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BgxTreeDemoRoutingModule { }
