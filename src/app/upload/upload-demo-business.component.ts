import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bgx-upload-demo-business',
  template: `
    <bgx-upload
    [bgxAction]="'https://jsonplaceholder.typicode.com/posts/'"
    [(bgxFileList)]="fileList"
    [bgxMultiple] = "true"
    bgxMode='business'
    >
    <button nz-button>
      <i class="anticon anticon-upload"></i><span>Click to Upload</span>
    </button>
    </bgx-upload>
  `,
  styles: []
})
export class UploadDemoBusinessComponent implements OnInit {
  fileList = [
    {
      uid: -1,
      name: 'xxxxxxxxx.png',
      status: 'done',
      type: 'image/*',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: -2,
      name: 'yyyyyyyyy.png',
      status: 'done',
      type: 'image/*',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  constructor(
  ) {

  }

  ngOnInit() {  }

}
