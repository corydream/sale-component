import {
  Injectable
} from '@angular/core';

import {
  MenuItem
} from './menu-item.interface';
import { BehaviorSubject } from 'rxjs';
export const PAGES_MENU = [
  {
    parentId: 1,
    childId: null,
    id: 10,
    route: '/home',
    title: '简介',
    selected: false,
    expanded: false,
    children: []
  }, {
    parentId: 1,
    childId: null,
    id: 211,
    route: '/use-bgx-legion',
    title: '快速上手',
    selected: false,
    expanded: false,
    children: []
  }, {
    parentId: 1,
    childId: null,
    id: 213,
    route: '/use-ant',
    title: '使用 ant 组件',
    selected: false,
    expanded: false,
    children: []
  }, {
    parentId: 1,
    childId: null,
    id: 123,
    route: '/change-log',
    title: '更新日志',
    selected: false,
    expanded: false,
    children: []
  },
  {
    parentId: 0,
    childId: 2,
    id: 1,
    route: '',
    title: '基础组件',
    selected: false,
    expanded: false,
    children: [
      // {
      //   id: 6,
      //   parentId: 1,
      //   childId: null,
      //   route: '/dropdown-search',
      //   title: 'dropdown-search',
      //   selected: false,
      //   expanded: false,
      //   children:  []
      // },
      // {
      //   id: 8,
      //   parentId: 1,
      //   childId: null,
      //   route: '/select',
      //   title: 'select',
      //   selected: false,
      //   expanded: false,
      //   children:  []
      // },
      // {
      //   id: 9,
      //   parentId: 1,
      //   childId: null,
      //   route: '/select-box',
      //   title: 'select-box',
      //   selected: false,
      //   expanded: false,
      //   children:  []
      // },
      // {
      //   id: 10,
      //   parentId: 1,
      //   childId: null,
      //   route: '/tree-select',
      //   title: 'tree-select',
      //   selected: false,
      //   expanded: false,
      //   children:  []
      // },
      // {
      //   id: 16,
      //   parentId: 1,
      //   childId: null,
      //   route: '/drag-and-drop',
      //   title: 'drag-and-drop',
      //   selected: false,
      //   expanded: false,
      //   children:  []
      // },
      // {
      //   id: 17,
      //   parentId: 1,
      //   childId: null,
      //   route: '/editor',
      //   title: 'editor',
      //   selected: false,
      //   expanded: false,
      //   children:  []
      // }
    ]
  },
  {
    parentId: 1,
    childId: null,
    id: 1234,
    route: '',
    title: '业务组件',
    selected: false,
    expanded: false,
    children: [
      {
        id: 179,
        parentId: 1234,
        childId: null,
        route: '/sale-tooltip',
        title: 'sale-tooltip',
        selected: false,
        expanded: false,
        children:  []
      },
      {
        id: 179,
        parentId: 1234,
        childId: null,
        route: '/sale-searchtip',
        title: 'sale-searchtip',
        selected: false,
        expanded: false,
        children:  []
      },
      {
        id: 99,
        parentId: 1234,
        childId: null,
        route: '/sale-tree',
        title: 'sale-tree',
        selected: false,
        expanded: false,
        children:  []
      }
    ]
  }
]
@Injectable()

export class MenuService {
  menuItems = new BehaviorSubject < any[] > ([]);
  protected _currentMenuItem = {};
  menuData = PAGES_MENU;
  constructor() {}
  /**
   * 更新菜单服务
   * @param {[MenuItem]} menuItems 菜单的数据类型
   * @memberof MenuService
   */
  public updateMenuByRoutes(menuItems: [MenuItem]) {
    this.menuItems.next(menuItems);
  }
  getData(): MenuItem[] {
    return this.menuData
  }
}
