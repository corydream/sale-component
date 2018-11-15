import { Component } from '@angular/core';
import { BgxModalRef, BgxModalService } from '../../components/modal'

@Component({
  selector: 'app-demo-modal-confirm-promise',
  template: `
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
  `,
  styles  : []
})
export class BgxDemoModalConfirmPromiseComponent {
  confirmModal: BgxModalRef; // For testing by now

  constructor(private modal: BgxModalService) { }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      bgxTitle: 'Do you Want to delete these items?',
      bgxContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      bgxOnOk: () => new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'))
    });
  }
}
