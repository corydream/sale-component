import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bgx-legion',
  templateUrl: './bgx-legion.component.html',
  styleUrls: ['./bgx-legion.component.less']
})
export class BgxLegionComponent implements OnInit {
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }

}
