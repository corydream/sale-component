import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'bgx-upload-demo-manually',
  template: `
  <bgx-upload
  [(bgxFileList)]="fileList"
  [bgxBeforeUpload]="beforeUpload">
    <button nz-button>
      <i class="anticon anticon-upload"></i><span>Select File</span>
    </button>
  </bgx-upload>
  <button nz-button [nzType]="'primary'" [nzLoading]="uploading" (click)="handleUpload()" [disabled]="fileList.length == 0" style="margin-top: 16px">
    {{ uploading ? 'Uploading' : 'Start Upload' }}
  </button>

  `,
  styles: []
})
export class UploadDemoManuallyComponent implements OnInit {
  uploading = false;
  fileList = [];
  beforeUpload = (file): boolean => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      file.url = file.thumbUrl = reader.result;
      this.fileList.push(file);
      this.fileList = [...this.fileList];
    };
    return false;
  }
  constructor(
    private http: HttpClient,
    private msg: NzMessageService
  ) {

  }
  ngOnInit() {
  }
  handleUpload(): void {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        (event: {}) => {
          this.uploading = false;
          this.msg.success('upload successfully.');
        },
        err => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }
}
