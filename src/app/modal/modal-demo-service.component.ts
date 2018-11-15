 /* entryComponents: BgxModalCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BgxModalRef, BgxModalService } from '../../components/modal'

@Component({
  selector: 'app-demo-modal-service',
  template: `
    <button nz-button nzType="primary" (click)="createModal()">
      <span>String</span>
    </button>

    <button nz-button nzType="primary" (click)="createTplModal(tplTitle, tplContent, tplFooter)">
      <span>Template</span>
    </button>
    <ng-template #tplTitle>
      <span>Title Template</span>
    </ng-template>
    <ng-template #tplContent>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </ng-template>
    <ng-template #tplFooter>
      <button nz-button nzType="primary" (click)="destroyTplModal()" [nzLoading]="tplModalButtonLoading">Close after submit</button>
    </ng-template>

    <br /><br />

    <button nz-button nzType="primary" (click)="createComponentModal()">
      <span>Use Component</span>
    </button>

    <button nz-button nzType="primary" (click)="createCustomButtonModal()">Custom Button</button>

    <br /><br />

    <button nz-button nzType="primary" (click)="openAndCloseAll()">Open more modals then close all after 2s</button>
    <bgx-modal [(bgxVisible)]="htmlModalVisible" bgxMask="false" bgxZIndex="1001" bgxTitle="Non-service html modal">This is a non-service html modal</bgx-modal>
  `,
  styles  : [
    `button {
      margin-right: 8px;
    }`
  ]
})
export class BgxDemoModalServiceComponent {
  tplModal: BgxModalRef;
  tplModalButtonLoading = false;
  htmlModalVisible = false;

  constructor(private modalService: BgxModalService) { }

  createModal(): void {
    this.modalService.create({
      bgxTitle: 'Modal Title',
      bgxContent: 'string, will close after 1 sec',
      bgxClosable: false,
      bgxDefaultMaximization: true,
      bgxFooter: null,
      bgxOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
    });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      bgxTitle: tplTitle,
      bgxContent: tplContent,
      bgxFooter: tplFooter,
      bgxMaskClosable: false,
      bgxClosable: false,
      bgxOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    window.setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  createComponentModal(): void {
    const modal = this.modalService.create({
      bgxTitle: 'Modal Title',
      bgxContent: BgxModalCustomComponent,
      bgxDefaultMaximization: true,
      bgxComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      bgxFooter: [{
        label: 'change component tilte from outside',
        onClick: (componentInstance) => {
          componentInstance.title = 'title in inner component is changed';
        }
      }]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    window.setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  createCustomButtonModal(): void {
    const modal = this.modalService.create({
      bgxTitle: 'custom button demo',
      bgxContent: 'pass array of button config to BgxFooter to create multiple buttons',
      bgxFooter: [
        {
          label: 'Close',
          shape: 'default',
          onClick: () => modal.destroy()
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: () => this.modalService.confirm({ bgxTitle: 'Confirm Modal Title', bgxContent: 'Confirm Modal Content' })
        },
        {
          label: 'Change Button Status',
          type: 'danger',
          loading: false,
          onClick(): void {
            this.loading = true;
            window.setTimeout(() => this.loading = false, 1000);
            window.setTimeout(() => {
              this.loading = false;
              this.disabled = true;
              this.label = 'can not be clicked！';
            }, 2000);
          }
        },
        {
          label: 'async load',
          type: 'dashed',
          onClick: () => new Promise(resolve => window.setTimeout(resolve, 2000))
        }
      ]
    });
  }

  openAndCloseAll(): void {
    let pos = 0;

    [ 'create', 'info', 'success', 'error' ].forEach((method) => this.modalService[method]({
      nzMask: false,
      bgxTitle: `Test ${method} title`,
      bgxContent: `Test content: <b>${method}</b>`,
      nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${(pos++) * 300}px` }
    }));

    this.htmlModalVisible = true;

    this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));

    window.setTimeout(() => this.modalService.closeAll(), 2000);
  }
}

@Component({
  selector: 'bgx-modal-custom-component',
  template: `
    <div>
      <h2>{{ title }}</h2>
      <h4>{{ subtitle }}</h4>
      <p>
        <span>Get Modal instance in component</span>
        <button nz-button [nzType]="'primary'" (click)="destroyModal()">destroy modal in the component</button>
      </p>
    </div>
  `
})
export class BgxModalCustomComponent {
  @Input() title: string;
  @Input() subtitle: string;

  constructor(private modal: BgxModalRef) { }

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
