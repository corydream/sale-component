import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-component',
  templateUrl: './sale-component.component.html',
  styleUrls: ['./sale-component.component.less']
})
export class BgxLegionComponent implements OnInit {
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }

}
