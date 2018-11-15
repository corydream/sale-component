import { Component } from '@angular/core';
import { BgxMessageService } from '../../components/message';

@Component({
    selector: 'app-message-demo-loading',
    template: `
    <button nz-button [nzType]="'default'" (click)="createBasicMessage()">Display a loading indicator</button>
    `,
    styles: []
})
export class MessageDemoLoadingComponent {
    constructor(
        private message: BgxMessageService
    ) {
    }
    createBasicMessage(): void {
        const id = this.message.loading('Action in progress..', { bgxDuration: 0, bgxClosable: false }).messageId;
        setTimeout(_ => {
            this.message.remove(id);
        }, 2500);
    }
}
