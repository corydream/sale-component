import { Component, OnInit } from '@angular/core';
import { BgxMessageService } from '../../components/message';

@Component({
    selector: 'app-message-demo-other',
    template: `
        <button nz-button (click)="createMessage('success')">Success</button>
        <button nz-button (click)="createMessage('error')">Error</button>
        <button nz-button (click)="createMessage('warning')">Warning</button>
     `,
    styles: [`
        [nz-button] {
            margin-right: 8px;
        }
    `]
})
export class MessageDemoOtherComponent {
    constructor(
        private message: BgxMessageService
    ) {
    }
    createMessage(type: string): void {
        this.message.create(type, `This is a message of ${type}`);
    }
}
