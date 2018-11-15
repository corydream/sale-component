import { Component } from '@angular/core';
@Component({
    selector: 'app-select-demo-custom',
    template: `
        <bgx-select style="width: 200px;" bgxPlaceHolder="Select OS" [(ngModel)]="selectedOS">
            <bgx-option bgxCustomContent bgxLabel="Windows" bgxValue="windows"><i class="anticon anticon-windows"></i> Windows</bgx-option>
            <bgx-option bgxCustomContent bgxLabel="Mac" bgxValue="mac"><i class="anticon anticon-apple"></i> Mac</bgx-option>
            <bgx-option bgxCustomContent bgxLabel="Android" bgxValue="android"><i class="anticon anticon-android"></i> Android</bgx-option>
        </bgx-select>
                `,
    styles: []
})
export class SelectDemoCustomComponent  {
    selectedOS
}
