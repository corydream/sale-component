import { Component, OnInit } from '@angular/core';
import { BgxViewerService } from '../../components/viewer';
@Component({
  selector: 'app-viewer-demo-content',
  template: `
  <button nz-button nzType="primary" (click)="viewerForCurrent()">默认图片</button>
  <br><br>
  <button nz-button nzType="primary" (click)="viewerForClosable()">点击蒙层关闭</button>
  `,
  styles: []
})
export class ViewerDemoContentComponent implements OnInit {
  data = [
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530188949542&di=48e923503da8c980297fd2ad712c6e72&imgtype=0&src=http%3A%2F%2Fpic.xoyo.com%2Fbbs%2F2011%2F05%2F08%2F1105080123e3311b68ed297d91.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      src:  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530188949542&di=d9e46f5fccce9cae36779379a74ca4cf&imgtype=0&src=http%3A%2F%2Fres.kaifu.com%2Fisy%2Fupload%2Fbooklet%2F20121120%2Fml5vm4bli3scmr34.jpg'
    },
    {
      src: 'https://content.banggood.cn/Content/lib/bg-oa-wroke/icon/logo.png'
    }
  ];
  constructor(private bgxViewerService: BgxViewerService) {
  }
  ngOnInit() {
  }
  viewerForCurrent() {
    this.bgxViewerService.create({
      bgxSource: this.data,
      bgxCurrent: 2
    });
  }
  viewerForClosable() {
    this.bgxViewerService.create({
      bgxSource: this.data,
      bgxMaskClosable: true
    });
  }

}
