import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo-grouping-columns-and-drag',
  template: `
    <bgx-table
      #groupingTable
      [nzData]="displayData"
      nzBordered
      nzSize="middle"
      [nzColumnConfig]="[{
        key: 'Name',
        width: '100px'
      },{
        key: 'Age',
        width: '200px'
      },{
        key: 'Street',
        width: '200px'
      },{
        key: 'Building',
        width: '100px'
      },{
        key: 'Door No.',
        width: '100px'
      },{
        key: 'Company Address',
        width: '300px'
      },{
        key: 'Company Name',
        width: '300px'
      },{
        key: 'Gender',
        width: '60px'
      }]"
      [nzScroll]="{ x:'130%',y: '240px' }"
      [nzDragThead]="true">
      <thead class="ant-table-thead nz-disable-thead">
        <tr style="height: 46px;">
          <th class="nz-disable-th" rowspan="4" nzLeft="0px" nzShowFilter [nzFilters]="filterName" (nzFilterChange)="search($event)">Name</th>
          <th class="nz-disable-th" colspan="4">Other</th>
          <th class="nz-disable-th" colspan="2">Company</th>
          <th class="nz-disable-th" rowspan="4" nzRight="0px">Gender</th>
        </tr>
        <tr style="height: 46px;">
          <th class="nz-disable-th" rowspan="3" nzShowSort [(nzSort)]="sortValue" (nzSortChange)="search(searchName)">Age</th>
          <th class="nz-disable-th" colspan="3">Address</th>
          <th class="nz-disable-th" rowspan="3">Company Address</th>
          <th class="nz-disable-th" rowspan="3">Company Name</th>
        </tr>
        <tr style="height: 46px;">
          <th class="nz-disable-th" rowspan="2">Street</th>
          <th class="nz-disable-th" colspan="2">Block</th>
        </tr>
        <tr style="height: 46px;">
          <th class="nz-disable-th">Building</th>
          <th class="nz-disable-th">Door No.</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of groupingTable.data">
          <td class="nz-disable-td" nzLeft="0px">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td">{{data.street}}</td>
          <td class="nz-disable-td">{{data.building}}</td>
          <td class="nz-disable-td">{{data.number}}</td>
          <td class="nz-disable-td">{{data.companyAddress}}</td>
          <td class="nz-disable-td">{{data.companyName}}</td>
          <td class="nz-disable-td" nzRight="0px">{{data.gender}}</td>
        </tr>
      </tbody>
    </bgx-table>`,
  styles  : []
})
export class BgxDemoTableGroupingColumnsAndDragComponent implements OnInit {
  displayData = [];
  data = [];
  sortValue = null;
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];
  searchName = [];

  search(searchName: string[]): void {
    this.searchName = searchName;
    const filterFunc = (item) => {
      return this.searchName.length ? this.searchName.some(name => item.name.indexOf(name) !== -1) : true;
    };
    const data = this.data.filter(item => filterFunc(item));
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a.age > b.age ? 1 : -1) : (b.age > a.age ? 1 : -1));
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.displayData.push({
        name          : 'John Brown',
        age           : i + 1,
        street        : 'Lake Park',
        building      : 'C',
        number        : 2035,
        companyAddress: 'Lake Street 42',
        companyName   : 'SoftLake Co',
        gender        : 'M'
      });
    }
    this.data = [ ...this.displayData ];
  }
}
