
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewerDemoComponent } from './viewer-demo.component';


const routes: Routes = [
    { path: '', component: ViewerDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerDemoRoutingModule { }
