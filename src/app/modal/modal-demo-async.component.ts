import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-modal-async',
  template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <bgx-modal [(bgxVisible)]="isVisible" bgxTitle="Modal Title" (bgxOnCancel)="handleCancel()" (bgxOnOk)="handleOk()" [bgxOkLoading]="isOkLoading">
      <p>Modal Content</p>
    </bgx-modal>
  `,
  styles: []
})
export class BgxDemoModalAsyncComponent {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
