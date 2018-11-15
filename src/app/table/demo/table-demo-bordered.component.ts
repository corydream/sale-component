import { Component } from '@angular/core';

@Component({
  selector: 'app-table-demo-bordered',
  template: `
    <bgx-table
      #borderedTable
      nzBordered
      nzFooter="Footer"
      nzTitle="Header"
      [nzData]="dataSet">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th">Name</th>
          <th class="nz-disable-th">Age</th>
          <th class="nz-disable-th">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of borderedTable.data">
          <td class="nz-disable-td">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
        </tr>
      </tbody>
    </bgx-table>
  `
})
export class BgxDemoTableBorderedComponent {
  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
