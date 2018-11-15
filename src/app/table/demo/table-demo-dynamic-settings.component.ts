import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo-dynamic-settings',
  template: `
    <div class="components-table-demo-control-bar">
      <form nz-form nzLayout="inline">
        <nz-form-item>
          <nz-form-label>
            <label>Bordered</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="bordered" name="bordered"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Loading</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="loading" name="loading"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Pagination</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="pagination" name="pagination"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Title</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="title" name="title"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Column Header</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="header" name="header"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Footer</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="footer" name="footer"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Expandable</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="expandable" name="expandable"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Checkbox</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="checkbox" name="checkbox"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Fixed Header</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="fixHeader" name="fixHeader"></nz-switch>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>Size</label>
          </nz-form-label>
          <nz-form-control>
            <nz-radio-group [(ngModel)]="size" name="size">
              <label nz-radio-button nzValue="default">Default</label>
              <label nz-radio-button nzValue="middle">Middle</label>
              <label nz-radio-button nzValue="small">Small</label>
            </nz-radio-group>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label>
            <label>No Result</label>
          </nz-form-label>
          <nz-form-control>
            <nz-switch [(ngModel)]="noResult" (ngModelChange)="noResultChange($event)" name="noResult"></nz-switch>
          </nz-form-control>
        </nz-form-item>
      </form>
    </div>
    <bgx-table
      #dynamicTable
      (nzCurrentPageDataChange)="currentPageDataChange($event)"
      [nzScroll]="fixHeader?{ y: '240px' }:null"
      [nzData]="dataSet"
      [nzBordered]="bordered"
      [nzLoading]="loading"
      [nzFrontPagination]="pagination"
      [nzShowPagination]="pagination"
      [nzFooter]="footer?'Here is Footer':null"
      [nzTitle]="title?'Here is Title':null"
      [nzSize]="size">
      <thead class="ant-table-thead nz-disable-thead">
        <tr *ngIf="header">
          <th class="nz-disable-th" nzWidth="50px" nzShowExpand *ngIf="expandable"></th>
          <th class="nz-disable-th" nzWidth="62px" nzShowCheckbox *ngIf="checkbox" [(nzChecked)]="allChecked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="checkAll($event)"></th>
          <th class="nz-disable-th" nzWidth="150px">Name</th>
          <th class="nz-disable-th" nzWidth="70px">Age</th>
          <th class="nz-disable-th">Address</th>
          <th class="nz-disable-th" nzWidth="260px">Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template ngFor let-data [ngForOf]="dynamicTable.data">
          <tr>
            <td class="nz-disable-td" nzShowExpand *ngIf="expandable" [(nzExpand)]="data.expand"></td>
            <td class="nz-disable-td" nzShowCheckbox *ngIf="checkbox" [(nzChecked)]="data.checked" (nzCheckedChange)="refreshStatus($event)"></td>
            <td class="nz-disable-td" class="nz-disable-td">{{data.name}}</td>
            <td class="nz-disable-td">{{data.age}}</td>
            <td class="nz-disable-td">{{data.address}}</td>
            <td class="nz-disable-td">
              <a href="#">Action 一 {{data.name}}</a>
              <nz-divider nzType="vertical"></nz-divider>
              <a href="#">Delete</a>
            </td>
          </tr>
          <tr [nzExpand]="data.expand&&expandable">
            <td class="nz-disable-td"></td>
            <td class="nz-disable-td" [attr.colspan]="checkbox?5:4">{{data.description}}</td>
          </tr>
        </ng-template>
      </tbody>
    </bgx-table>`,
  styles  : [
      `
      .components-table-demo-control-bar {
        margin-bottom: 10px;
      }

      .components-table-demo-control-bar ::ng-deep .ant-form-item {
        margin-right: 15px;
        margin-bottom: 8px;
      }
    `
  ]
})
export class BgxDemoTableDynamicSettingsComponent implements OnInit {
  dataSet = [];
  bordered = false;
  loading = false;
  pagination = true;
  header = true;
  title = true;
  footer = true;
  fixHeader = false;
  size = 'small';
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  displayData = [];
  noResult = false;

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; expand: boolean; description: string; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.dataSet.push({
        name       : 'John Brown',
        age        : `${i}2`,
        address    : `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked    : false,
        expand     : false
      });
    }
  }

  noResultChange(status: boolean): void {
    this.dataSet = [];
    if (!status) {
      this.ngOnInit();
    }
  }
}
