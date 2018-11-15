import { Component } from '@angular/core';
import { BgxMessageService } from '../../components/message';

@Component({
    selector: 'app-message-demo-duration',
    template: `
    <button nz-button [nzType]="'default'" (click)="createBasicMessage()">Customized display duration</button>
    `,
    styles: []
})
export class MessageDemoDurationComponent {
    constructor(
        private message: BgxMessageService
    ) {
    }
    createBasicMessage(): void {
        this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', { bgxDuration: 10000 });
      }
}
