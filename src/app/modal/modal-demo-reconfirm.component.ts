import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-modal-reconfirm',
  template: `
  <button nz-button (click)="showModal()"><span>Reconfirm</span></button>
  <bgx-modal [(bgxVisible)]="isVisible" bgxTitle="The Reconfirm Modal" bgxReconfirm="true" (bgxOnCancel)="handleCancel()" (bgxOnOk)="handleOk()">
    <p>Reconfirm</p>
    <p>Reconfirm</p>
    <p>Reconfirm</p>
  </bgx-modal>
  `,
  styles: []
})
export class BgxDemoModalReconfirmComponent {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
