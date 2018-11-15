import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo-row-selection-and-operation',
  template: `
    <div style="margin-bottom: 16px;">
      <button nz-button [disabled]="disabledButton" [nzType]="'primary'" [nzLoading]="operating" (click)="operateData()">
        Reload
      </button>
      <span style="margin-left: 8px;" *ngIf="checkedNumber">Selected {{checkedNumber}} items</span>
    </div>
    <bgx-table
      #rowSelectionTable
      [nzData]="dataSet"
      (nzCurrentPageDataChange)="currentPageDataChange($event)"
      (nzPageIndexChange)="refreshStatus()"
      (nzPageSizeChange)="refreshStatus()">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th" nzShowCheckbox [(nzChecked)]="allChecked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="checkAll($event)"></th>
          <th class="nz-disable-th">Name</th>
          <th class="nz-disable-th">Age</th>
          <th class="nz-disable-th">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of rowSelectionTable.data">
          <td class="nz-disable-td" nzShowCheckbox [(nzChecked)]="data.checked" (nzCheckedChange)="refreshStatus($event)"></td>
          <td class="nz-disable-td">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
        </tr>
      </tbody>
    </bgx-table>`,
  styles  : []
})
export class BgxDemoTableRowSelectionAndOperationComponent implements OnInit {
  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  operating = false;
  dataSet = [];
  indeterminate = false;

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  operateData(): void {
    this.operating = true;
    setTimeout(_ => {
      this.dataSet.forEach(value => value.checked = false);
      this.refreshStatus();
      this.operating = false;
    }, 1000);
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.dataSet.push({
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`,
        checked: false
      });
    }
  }
}
