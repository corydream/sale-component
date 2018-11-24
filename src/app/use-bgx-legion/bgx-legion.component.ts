import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgx-legion-component',
  templateUrl: './bgx-legion.component.html',
  styleUrls: ['./bgx-legion.component.less']
})
export class BgxLegionComponent implements OnInit {
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }

}
