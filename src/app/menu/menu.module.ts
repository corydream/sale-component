import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MenuService } from './menu.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule
  ],
  declarations: [
    SideNavComponent,
    SideMenuComponent
  ],
  exports: [SideNavComponent, SideMenuComponent],
  providers: [MenuService]
})
export class MenuModule { }
