import { Component } from '@angular/core';
@Component({
    selector: 'app-select-demo-base',
    template: `
        <div>
            <bgx-select style="width: 120px;" [(ngModel)]="selectedValue" bgxPlaceHolder="Choose">
                <bgx-option bgxValue="jack" bgxLabel="Jack"></bgx-option>
                <bgx-option bgxValue="lucy" bgxLabel="Lucy"></bgx-option>
                <bgx-option bgxValue="disabled" bgxLabel="Disabled" bgxDisabled></bgx-option>
            </bgx-select>
            <bgx-select style="width: 120px;" [ngModel]="selectedValue" bgxDisabled>
                <bgx-option bgxValue="jack" bgxLabel="Jack"></bgx-option>
                <bgx-option bgxValue="lucy" bgxLabel="Lucy"></bgx-option>
            </bgx-select>
        </div>
        `,
    styles: [`
        bgx-select {
         margin-right: 8px;
        }
    `]
})
export class SelectDemoBaseComponent {
    selectedValue = 'lucy';
}
