import { Component, OnInit } from '@angular/core';
import { BgxViewerService } from '../../components/viewer';
@Component({
  selector: 'app-viewer-demo-base',
  template: `
  <button nz-button nzType="default" (click)="show()">点击预览</button>
  `,
  styles: []
})
export class ViewerDemoBaseComponent implements OnInit {
  data = [
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530188949542&di=48e923503da8c980297fd2ad712c6e72&imgtype=0&src=http%3A%2F%2Fpic.xoyo.com%2Fbbs%2F2011%2F05%2F08%2F1105080123e3311b68ed297d91.jpg'
    }
  ];
  constructor(public bgxViewerService: BgxViewerService) {

  }
  ngOnInit() {
}
  show() {
    this.bgxViewerService.create({
      bgxSource: this.data,
    });
  }

}
