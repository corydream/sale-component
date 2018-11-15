import { Component } from '@angular/core';
import { BgxModalService } from '../../components/modal'

@Component({
  selector: 'app-demo-modal-confirm',
  template: `
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
    <button nz-button nzType="dashed" (click)="showDeleteConfirm()">Delete</button>
  `,
  styles  : [
      `button {
      margin-right: 8px;
    }`
  ]
})
export class BgxDemoModalConfirmComponent {
  constructor(private modalService: BgxModalService) {
  }

  showConfirm(): void {
    this.modalService.confirm({
      bgxTitle  : '<i>Do you Want to delete these items?</i>',
      bgxContent: '<b>Some descriptions</b>',
      bgxOnOk   : () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      bgxTitle     : 'Are you sure delete this task?',
      bgxContent   : '<b style="color: red;">Some descriptions</b>',
      bgxOkText    : 'Yes',
      bgxOkType    : 'danger',
      bgxOnOk      : () => console.log('OK'),
      bgxCancelText: 'No',
      bgxOnCancel  : () => console.log('Cancel')
    });
  }
}
