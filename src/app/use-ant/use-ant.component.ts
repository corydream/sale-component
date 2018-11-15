import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-ant',
  templateUrl: './use-ant.component.html',
  styleUrls: ['./use-ant.component.less']
})
export class UseAntComponent implements OnInit {
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }

}
