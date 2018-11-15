import { Component } from '@angular/core';

@Component({
  selector: 'app-table-demo-row-selection',
  template: `
    <bgx-table
      #rowSelectionTable
      [nzData]="data"
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
          <td class="nz-disable-td" nzShowCheckbox [(nzChecked)]="data.checked" [nzDisabled]="data.disabled" (nzCheckedChange)="refreshStatus($event)"></td>
          <td class="nz-disable-td">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
        </tr>
      </tbody>
    </bgx-table>`,
  styles  : []
})
export class BgxDemoTableRowSelectionComponent {
  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name    : 'John Brown',
      age     : 32,
      address : 'New York No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Jim Green',
      age     : 42,
      address : 'London No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Joe Black',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Disabled User',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: true
    }
  ];

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
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
}
