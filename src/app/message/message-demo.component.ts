import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-demo',
  templateUrl: './message-demo.component.html',
  styleUrls: ['./message-demo.component.less']
})
export class MessageDemoComponent implements OnInit {
  DemoTypeMessageBaseCode = require('!!raw-loader!./message-demo-base.component.ts');
  DemoTypeMessageOtherCode = require('!!raw-loader!./message-demo-other.component.ts');
  DemoTypeMessageDurationCode = require('!!raw-loader!./message-demo-duration.component.ts');
  DemoTypeMessageLoadingCode = require('!!raw-loader!./message-demo-loading.component.ts');
  constructor() { }
  // DemoTypeSelectMultipleCode = require('!!raw-loader!./select-demo-multiple.component.ts');
  _markdownCode = require('!!raw-loader!./readme.md');
  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
