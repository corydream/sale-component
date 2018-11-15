import { MenuService } from '../menu.service';
import { Component, OnInit, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'demo-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit, AfterViewInit {
  width: number;
  public menuList: any;
  isClosed = false;
  @Output() expandChange: EventEmitter<any> = new EventEmitter();
  constructor( private _menuService: MenuService, private eleRef: ElementRef) {
  }


  ngOnInit() {
    this.menuList = this._menuService.getData()
  }

  ngAfterViewInit() {

  }

  public toggleSubMenu($event) {

  }

  closeNav() {
    this.isClosed = !this.isClosed
    this.expandChange.emit(this.isClosed)
  }


}
