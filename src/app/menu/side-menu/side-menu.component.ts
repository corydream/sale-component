import { CLASS_PREFIX } from './../../constant';
import { classNames } from './../../utils/classnames';
import { MenuService } from './../menu.service';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild  } from '@angular/core';


 declare const $: any;

@Component({
  selector: 'demo-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {

  @Input() menuItem: any;
  @Input() child: boolean;
  @Input() menuList = [];
  @Input() menuData: any;
  @Output() toggleSubMenu = new EventEmitter<any>();
  @ViewChild('childrenList') childrenList: ElementRef;
  constructor(public menuSer: MenuService) {
    this.child = false;
   }
  ngOnInit() {
  }

  getClass() {
     return classNames(CLASS_PREFIX, {
            [`${CLASS_PREFIX}-menu-show`]: !this.menuItem.expanded
          });
  }
   onToggleSubMenu($event, item): boolean {
     this.menuItem.expanded = !this.menuItem.expanded;
    return false;
  }

}
