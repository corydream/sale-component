import { Component } from '@angular/core';
import { BgxModalService } from '../../components/modal'

@Component({
  selector: 'app-demo-modal-manual',
  template: `
    <button nz-button (click)="success()">Success</button>
  `,
  styles: []
})
export class BgxDemoModalManualComponent {
  constructor(private modalService: BgxModalService) { }

  success(): void {
    const modal = this.modalService.success({
      bgxTitle: 'This is a notification message',
      bgxContent: 'This modal will be destroyed after 1 second'
    });

    window.setTimeout(() => modal.destroy(), 1000);
  }
}
