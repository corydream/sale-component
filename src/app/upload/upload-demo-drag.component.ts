import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'bgx-upload-demo-drag',
  template: `
  <bgx-upload
  bgxType="drag"
  [bgxMultiple]="true"
  [bgxLimit]="2"
  bgxAction="https://jsonplaceholder.typicode.com/posts/"
  (bgxChange)="handleChange($event)">
  <p class="ant-upload-drag-icon">
    <i class="anticon anticon-inbox"></i>
  </p>
  <p class="ant-upload-text">Click or drag file to this area to upload</p>
  <p class="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
</bgx-upload>

  `,
  styles: [`
  :host ::ng-deep i {
    font-size: 32px;
    color: #999;
  }
  :host ::ng-deep .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  `]
})
export class UploadDemoDragComponent implements OnInit {
  fileList = [];
  constructor(
    private msg: NzMessageService
  ) {

  }
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
