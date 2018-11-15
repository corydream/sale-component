import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bgx-upload-demo-multiple',
  template: `
    <bgx-upload
    [bgxAction]="'https://jsonplaceholder.typicode.com/posts/'"
    [(bgxFileList)]="fileList"
    bgxAccept=".zip,.jpg"
    [bgxMultiple] = "true"
    >
      <button nz-button>
        <i class="anticon anticon-upload"></i><span>Click to Upload</span>
      </button>
    </bgx-upload>
    <br>

  `,
  styles: []
})
export class UploadDemoMultipleComponent implements OnInit {
  // fileList = [];
  fileList = [
    {
      uid: -1,
      name: 'xxx.zip',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.zip',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.zip'
    }
  ];
  constructor(
  ) {

  }
  ngOnInit() {
  }
}
