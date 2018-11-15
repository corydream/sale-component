import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseAntComponent } from './use-ant.component';

const routes: Routes = [ {
  path: '', component: UseAntComponent,
    children: [
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseAntRoutingModule { }
