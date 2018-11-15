import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bgx-upload-demo-avatar',
  template: `
    <bgx-upload
    [bgxAction]="'https://jsonplaceholder.typicode.com/posts/'"
    [(bgxFileList)]="fileList"
    [bgxShowButton]="fileList.length < 1"
    [bgxShowUploadList] = "bgxConfig"
    [bgxAccept] = "'image/png,image/jpeg'"
    (nzChange)="handleChange($event)"
    >
    <div class="ant-upload ant-upload-select ant-upload-select-picture-card bgx-center">
        <i class="anticon anticon-plus"></i>
        <div class="ant-upload-text">Upload</div>
    </div>

    </bgx-upload>

  `,
  styles: [`
  .bgx-center{
    display: flex;
    flex-direction: column;;
    justify-content: center
  }
  :host ::ng-deep .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  `]
})
export class UploadDemoAvatarComponent implements OnInit {
  fileList = [];
  bgxConfig = {
    showPreviewIcon: false,
    showRemoveIcon : true
  };
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
  ) {

  }
  ngOnInit() {
  }
  handleChange(e) {
    console.log(e);
  }
}
