import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLogComponent } from './change-log.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChangeLogComponent },
];


@NgModule({
  declarations: [ChangeLogComponent],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [],
  providers: [],
})
export class ChangeLogModule {}
