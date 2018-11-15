import { Component } from '@angular/core';

@Component({
  selector: 'app-table-demo-fixed-columns',
  template: `
    <bgx-table #nzTable [nzData]="dataSet" [nzPageSize]="10" [nzScroll]="{x:'1300px'}">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th" nzWidth="100px" nzLeft="0px">Full Name</th>
          <th class="nz-disable-th" nzWidth="100px" nzLeft="100px">Age</th>
          <th class="nz-disable-th">Column 1</th>
          <th class="nz-disable-th">Column 2</th>
          <th class="nz-disable-th">Column 3</th>
          <th class="nz-disable-th">Column 4</th>
          <th class="nz-disable-th">Column 5</th>
          <th class="nz-disable-th">Column 6</th>
          <th class="nz-disable-th">Column 7</th>
          <th class="nz-disable-th">Column 8</th>
          <th class="nz-disable-th" nzWidth="100px" nzRight="0px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data">
          <td class="nz-disable-td" nzLeft="0px">{{data.name}}</td>
          <td class="nz-disable-td" nzLeft="100px">{{data.age}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
          <td class="nz-disable-td" nzRight="0px">
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </bgx-table>`,
  styles  : []
})
export class BgxDemoTableFixedColumnsComponent {
  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York Park',
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 40,
      address: 'London Park',
    }
  ];
}
