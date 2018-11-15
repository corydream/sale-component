import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { AntDemoService } from './ant-demo.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './ant-demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ant-demo.component.less']
})
export class AntDemoComponent implements OnInit, AfterViewInit {
  mainPl: any;
  navWidth: number;
  navPosition: number;
  isClose = false;
  @ViewChild('nav') navEl: ElementRef;
  userInfo: object;
  auth = false;
  constructor(
    private modalService: NzModalService,
    private messageService: NzMessageService,
    private addDemoService: AntDemoService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    //     const navEl = this.navEl.nativeElement.querySelector('.sidebar');
    // this.navWidth = navEl.clientWidth + 25;
    // this.mainPl = this.navWidth;
    // this.navPosition = 0;
    document.domain = 'banggood.cn';
    this.addDemoService.getUserName()
        .subscribe(res => {
            if (res.success) {
                this.userInfo = res.result;
                this.authService.broadcastUserInfo(res.result);
            }
        });
  }

  ngAfterViewInit() {

  }

  // closeNav(data: any) {
  //   if (data) {
  //     this.mainPl = 0;
  //     this.navPosition = this.navWidth;
  //   } else {
  //     this.mainPl = this.navWidth;
  //     this.navPosition = 0;
  //   }
  // }

  feedback() {
    const modal = this.modalService.create({
      nzTitle: '问题反馈',
      nzContent: FeedbackComponent,
      nzOkLoading: true,
      nzWidth: '50%',
      nzComponentParams: {
        userInfo: this.userInfo
      },
      nzFooter: null,
      nzOnCancel: (component) => {
        component.cancal()
        return false;
      }
    });

    // Return a result when closed
    modal.afterClose.subscribe((result) => {
      if (result && result.data) {
        this.messageService.success('反馈成功');
      }
    });
  }
}
