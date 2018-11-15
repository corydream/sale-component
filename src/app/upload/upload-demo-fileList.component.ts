import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bgx-upload-demo-fileList',
  template: `
    <bgx-upload
    [bgxAction]="'https://jsonplaceholder.typicode.com/posts/'"
    [(bgxFileList)]="fileList"
    [bgxImgSize]="true"
    [bgxRemove]='onRemove'
    >
      <button nz-button>
        <i class="anticon anticon-upload"></i><span>Click to Upload</span>
      </button>
    </bgx-upload>
    <br>

  `,
  styles: [`
  `]
})
export class UploadDemoFileListComponent implements OnInit {
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
    },
    {
      uid: -3,
      name: 'zzzzzzzzz.png',
      status: 'error',
      type: 'image/*',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  onRemove = (file) =>  {
    return new Observable(obser => {
      setTimeout(() => {
        obser.next(true);
      }, 2000);
    })
  };
  constructor(
  ) {

  }
  ngOnInit() {
  }
}
