import { Component } from '@angular/core';
import { BgxModalService } from '../../components/modal'

@Component({
  selector: 'app-demo-modal-info',
  template: `
    <button nz-button (click)="info()">Info</button>
    <button nz-button (click)="success()">Success</button>
    <button nz-button (click)="error()">Error</button>
    <button nz-button (click)="warning()">Warning</button>
  `,
  styles  : [
    `button {
      margin-right: 8px;
    }`
  ]
})
export class BgxDemoModalInfoComponent {
  constructor(private modalService: BgxModalService) { }

  info(): void {
    this.modalService.info({
      bgxTitle: 'This is a notification message',
      bgxContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      bgxOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modalService.success({
      bgxTitle: 'This is a success message',
      bgxContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modalService.error({
      bgxTitle: 'This is an error message',
      bgxContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modalService.warning({
      bgxTitle: 'This is an warning message',
      bgxContent: 'some messages...some messages...'
    });
  }
}
