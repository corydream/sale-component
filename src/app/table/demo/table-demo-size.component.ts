import { Component } from '@angular/core';

@Component({
  selector: 'app-table-demo-size',
  template: `
    <h4>Middle size table</h4>
    <bgx-table
      #middleTable
      nzSize="middle"
      [nzData]="data">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th">Name</th>
          <th class="nz-disable-th">Age</th>
          <th class="nz-disable-th">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of middleTable.data">
          <td class="nz-disable-td">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td"> class="nz-disable-th"{{data.address}}</td>
        </tr>
      </tbody>
    </bgx-table>
    <h4>Small size table</h4>
    <bgx-table
      #smallTable
      nzSize="small"
      [nzData]="data">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th">Name</th>
          <th class="nz-disable-th">Age</th>
          <th class="nz-disable-th">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of smallTable.data">
          <td class="nz-disable-td">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
        </tr>
      </tbody>
    </bgx-table>
  `,
  styles  : [
    `h4 { margin-bottom: 16px; }`
  ]
})
export class BgxDemoTableSizeComponent {
  data = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];
}
