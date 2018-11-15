import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-modal-position',
  template: `
    <button nz-button nzType="primary" (click)="showModalTop()">Display a modal dialog at 20px to Top</button>
    <bgx-modal [bgxStyle]="{ top: '20px' }" [(bgxVisible)]="isVisibleTop" bgxTitle="20px to Top" (bgxOnCancel)="handleCancelTop()" (bgxOnOk)="handleOkTop()">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </bgx-modal>

    <br/><br/>

    <button nz-button nzType="primary" (click)="showModalMiddle()">Vertically centered modal dialog</button>
    <bgx-modal bgxWrapClassName="vertical-center-modal" [(bgxVisible)]="isVisibleMiddle" bgxTitle="Vertically centered modal dialog" (bgxOnCancel)="handleCancelMiddle()" (bgxOnOk)="handleOkMiddle()">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </bgx-modal>
  `,
  styles: [ `
    ::ng-deep .vertical-center-modal {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ::ng-deep .vertical-center-modal .ant-modal {
      top: 0;
    }
  ` ]
})
export class BgxDemoModalPositionComponent {
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
