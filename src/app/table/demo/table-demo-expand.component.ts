import { Component } from '@angular/core';

@Component({
  selector: 'app-table-demo-expand',
  template: `
    <bgx-table #nzTable [nzData]="dataSet" [nzPageSize]="10">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th"nzShowExpand></th>
          <th class="nz-disable-th">Name</th>
          <th class="nz-disable-th">Age</th>
          <th class="nz-disable-th">Address</th>
          <th class="nz-disable-th">Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template ngFor let-data [ngForOf]="nzTable.data">
          <tr>
            <td class="nz-disable-td" nzShowExpand [(nzExpand)]="data.expand"></td>
            <td class="nz-disable-td">{{data.name}}</td>
            <td class="nz-disable-td">{{data.age}}</td>
            <td class="nz-disable-td">{{data.address}}</td>
            <td class="nz-disable-td"><a href="#">Delete</a></td>
          </tr>
          <tr [nzExpand]="data.expand">
            <td class="nz-disable-td"></td>
            <td class="nz-disable-td" colspan="4">{{data.description}}</td>
          </tr>
        </ng-template>
      </tbody>
    </bgx-table>`,
  styles  : []
})
export class BgxDemoTableExpandComponent {
  dataSet = [
    {
      name       : 'John Brown',
      age        : 32,
      expand     : false,
      address    : 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      name       : 'Jim Green',
      age        : 42,
      expand     : false,
      address    : 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      name       : 'Joe Black',
      age        : 32,
      expand     : false,
      address    : 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ];
}
