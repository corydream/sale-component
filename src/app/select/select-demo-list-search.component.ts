import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-select-demo-list-search',
    template: `
    <bgx-select style="width:200px;"
    [bgxListSearchServer]="true" (bgxOnListSearch)="onSearch($event)"
    [(ngModel)]="selected">
        <ng-container *ngFor="let option of selecteOptions">
            <bgx-option *ngIf="!isLoading" [bgxValue]="option.value" [bgxLabel]="option.name" >
            </bgx-option>
        </ng-container>
        <bgx-option *ngIf="isLoading" [bgxDisabled] = "true" bgxCustomContent>
            <i class="anticon anticon-loading anticon-spin loading-icon"></i> Loading Data...
        </bgx-option>
    </bgx-select>
                `,
    styles: []
})
export class SelectDemoListSearchComponent implements OnInit {
    selecteOptions = [];
    selected = '2';
    isLoading = false;
    constructor() { }
    ngOnInit() {
        setTimeout(_ => {
            let selecteOptions = [];
            for (let i = 0; i < 5; i++) {
                selecteOptions.push({
                    name: `测试${i}`,
                    value: `${i}`
                })
            }
            this.selecteOptions = selecteOptions;
        });
    }
    onSearch(value) {
        if (value) {
            this.isLoading = true;
            setTimeout(() => {
                let selecteOptions = [];
                for (let i = 15; i < 35; i++) {
                    selecteOptions.push({
                        name: Math.ceil( Math.random() * i * 10).toString(36),
                        value: `${i}`
                    })
                }
                this.selecteOptions = selecteOptions;
                this.isLoading = false;
            }, 2000);
        }
    }
}