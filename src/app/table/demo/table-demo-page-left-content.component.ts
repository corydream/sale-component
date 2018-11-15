import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo-page-left-content',
  template: `
  <bgx-table #PageContentTable [nzData]="dataSet" [nzPageLeftContent]="pageContent">
    <thead class="ant-table-thead nz-disable-thead">
      <tr>
        <th class="nz-disable-th">Name</th>
        <th class="nz-disable-th">Age</th>
        <th class="nz-disable-th">Address</th>
        <th class="nz-disable-th">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of PageContentTable.data">
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
  </bgx-table>
  <ng-template #pageContent>
    <div>Total: <span style="color:#f5222d">20</span>Adult: <span style="color:#ffac38">3</span>Country: <span style="color: #1890ff">UK</span></div>
  </ng-template>`,
  styles: [`
    span {
      margin: 0 30px 0 5px;
    }
  `]
})
export class BgxDemoTablePageLeftContentComponent implements OnInit {

  dataSet = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.dataSet.push({
        name   : `Edward King ${i}`,
        age    : 10 + i,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }
}
