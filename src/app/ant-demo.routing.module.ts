import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AntDemoComponent } from './ant-demo.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'use-ant', loadChildren: './use-ant/use-ant.module#UseAntModule'
      },
      {
        path: 'use-bgx-legion', loadChildren: './use-bgx-legion/bgx-legion.module#BgxLegionModule'
      },
      {
        path: 'change-log', loadChildren: './change-log/change-log.module#ChangeLogModule'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AntDemoRoutingModule {
}
