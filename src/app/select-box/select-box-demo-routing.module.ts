import { BgxDemoSelectBoxComponent } from './select-box-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: BgxDemoSelectBoxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BgxDemoSelectBoxRoutingModule { }
