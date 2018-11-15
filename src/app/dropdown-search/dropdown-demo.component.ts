import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.less']
})
export class DropDownDemoComponent implements OnInit {
  DemoTypeDropdownBaseCode = require('!!raw-loader!./dropdown-demo-base.component.ts');
  _markdownCode = require('!!raw-loader!./readme.md');

  constructor() {
  }
  ngOnInit() {

  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
