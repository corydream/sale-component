import { Component } from '@angular/core';
import { BgxMessageService } from '../../components/message';

@Component({
    selector: 'app-message-demo-base',
    template: `
    <button nz-button [nzType]="'primary'" (click)="createBasicMessage()">message</button>
     `,
    styles: []
})
export class MessageDemoBaseComponent {
    constructor(
        private message: BgxMessageService
    ) {
    }
    createBasicMessage(): void {
        this.message.info('This is a normal message');
    }
}
