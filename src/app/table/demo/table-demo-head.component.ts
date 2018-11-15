import { Component } from '@angular/core';

@Component({
  selector: 'app-table-demo-head',
  template: `
    <bgx-table #filterTable [nzData]="displayData">
      <thead class="ant-table-thead nz-disable-thead" (nzSortChange)="sort($event)" nzSingleSort>
        <tr>
          <th class="nz-disable-th" nzShowSort nzSortKey="name" nzShowFilter [nzFilters]="nameList" (nzFilterChange)="filter($event,searchAddress)">Name</th>
          <th class="nz-disable-th" nzShowSort nzSortKey="age">Age</th>
          <th class="nz-disable-th" nzShowSort nzSortKey="address" nzShowFilter [nzFilterMultiple]="false" [nzFilters]="addressList" (nzFilterChange)="filter(listOfSearchName,$event)">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of filterTable.data">
          <td class="nz-disable-td">{{data.name}}</td>
          <td class="nz-disable-td">{{data.age}}</td>
          <td class="nz-disable-td">{{data.address}}</td>
        </tr>
      </tbody>
    </bgx-table>`
})
export class BgxDemoTableHeadComponent {
  nameList = [
    { text: 'Joe', value: 'Joe' },
    { text: 'Jim', value: 'Jim' }
  ];
  addressList = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [
    {
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name   : 'Jim Red',
      age    : 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  displayData = [ ...this.data ];

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }
}
