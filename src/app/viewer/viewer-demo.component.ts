import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer-demo.component.html',
  styleUrls: ['./viewer-demo.component.less']
})
export class ViewerDemoComponent implements OnInit {
  DemoTypeViewerBaseCode = require('!!raw-loader!./viewer-demo-base.component.ts');
  DemoTypeViewerContentCode = require('!!raw-loader!./viewer-demo-content.component.ts');
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}

