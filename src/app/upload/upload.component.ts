import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgx-demo-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  UplaodBaseCode = require('!!raw-loader!./upload-demo-base.component.ts');
  UplaodAvatarCode = require('!!raw-loader!./upload-demo-avatar.component.ts');
  UplaodFileListCode = require('!!raw-loader!./upload-demo-fileList.component.ts');
  UplaodMultipleCode = require('!!raw-loader!./upload-demo-multiple.component.ts');
  UplaodDragCode = require('!!raw-loader!./upload-demo-drag.component.ts');
  UplaodManuallyCode = require('!!raw-loader!./upload-demo-manually.component.ts');
  UplaodBusinessCode = require('!!raw-loader!./upload-demo-business.component.ts');
  _markdownCode = require('!!raw-loader!./readme.md');
  constructor() { }

  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
