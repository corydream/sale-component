import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-modal-basic',
  template: `
    <button nz-button [nzType]="'primary'" (click)="showModal()"><span>Show Modal</span></button>
    <bgx-modal (bgxMaximizationChange)="maximizationChange($event)" [(bgxVisible)]="isVisible" bgxTitle="The first Modal"
    (bgxOnCancel)="handleCancel()" (bgxOnOk)="handleOk()">
      <p>Content one</p>
      <p>Content two</p>
      <p>Content three</p>
    </bgx-modal>
  `,
  styles: []
})
export class BgxDemoModalBasicComponent {
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

  maximizationChange($event) {
    console.log($event);
  }
}
