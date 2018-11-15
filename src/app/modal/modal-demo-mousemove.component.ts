import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-modal-mousemove',
  template: `
    <button nz-button [nzType]="'primary'" (click)="showModal()"><span>Mousemove Modal</span></button>
    <bgx-modal [bgxMouseMove]="true" [(bgxVisible)]="isVisible" bgxTitle="Move me" (bgxOnCancel)="handleCancel()" (bgxOnOk)="handleOk()">
      <p>Try it!</p>
      <p>Try it!</p>
      <p>Try it!</p>
    </bgx-modal>
  `,
  styles: []
})
export class BgxDemoModalMousemoveComponent {
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
