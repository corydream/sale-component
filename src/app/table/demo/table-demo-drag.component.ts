import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo-drag',
  template: `
  <bgx-table #dragTable [nzData]="dataSet" [nzDragThead]="true">
    <thead class="ant-table-thead nz-disable-thead">
      <tr>
        <th class="nz-disable-th" [nzWidth]="'10%'">Name</th>
        <th class="nz-disable-th" [nzWidth]="'20%'">Age</th>
        <th class="nz-disable-th" [nzWidth]="'30%'">Address</th>
        <th class="nz-disable-th" [nzWidth]="'40%'">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of dragTable.data">
        <td class="nz-disable-td">{{data.name}}</td>
        <td class="nz-disable-td">{{data.age}}</td>
        <td class="nz-disable-td">{{data.address}}</td>
        <td class="nz-disable-td">
          <a>Action 一 {{data.name}}</a>
          <nz-divider nzType="vertical"></nz-divider>
          <a>Delete</a>
        </td>
      </tr>
    </tbody>
  </bgx-table>`,
})
export class BgxDemoTableDragComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void { }
}
