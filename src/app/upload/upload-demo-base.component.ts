import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bgx-upload-demo-base',
  template: `
    <bgx-upload
    [bgxAction]="'https://jsonplaceholder.typicode.com/posts/'"
    [(bgxFileList)]="fileList"
    >
    <button nz-button>
      <i class="anticon anticon-upload"></i><span>Click to Upload</span>
    </button>
    </bgx-upload>
  `,
  styles: []
})
export class UploadDemoBaseComponent implements OnInit {
  fileList = [];
  constructor(
  ) {

  }
  ngOnInit() {
  }

}
