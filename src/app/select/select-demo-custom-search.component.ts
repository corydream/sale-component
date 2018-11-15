import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-select-demo-custom-search',
    template: `
        <bgx-select style="width: 200px;" [bgxFilterOption]="filterOption" [bgxPlaceHolder]="'自定义搜索条件'" [(ngModel)]="selected">
            <bgx-option *ngFor="let option of selecteOptions"  [bgxValue]="option" [bgxLabel]="option.name" >
            </bgx-option>
        </bgx-select>
    `,
    styles: []
})
export class SelectDemoCustomSearchComponent implements OnInit  {
    selecteOptions = [];
    selected;
    ngOnInit() {
        setTimeout(_ => {
            let selecteOptions = [];
            for (let i = 40; i < 55; i++) {
                selecteOptions.push({
                    name: `测试${i}`,
                    mark: i.toString(36),
                    value: `${i}`
                })
            }
            this.selecteOptions = selecteOptions;
        });
    }
    filterOption(value: string, option): boolean {
        if (option['bgxValue']['mark'].indexOf(value) > -1) {
            return true;
        }
        return false;
    }
}
