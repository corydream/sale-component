import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo-nested-table',
  template: `
    <bgx-table #nestedTable [nzData]="nestedTableData" [nzPageSize]="10">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th" nzShowExpand></th>
          <th class="nz-disable-th">Name</th>
          <th class="nz-disable-th">Platform</th>
          <th class="nz-disable-th">Version</th>
          <th class="nz-disable-th">Upgraded</th>
          <th class="nz-disable-th">Creator</th>
          <th class="nz-disable-th">Date</th>
          <th class="nz-disable-th">Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template ngFor let-data [ngForOf]="nestedTable.data">
          <tr>
            <td class="nz-disable-td" nzShowExpand [(nzExpand)]="data.expand"></td>
            <td class="nz-disable-td">{{data.name}}</td>
            <td class="nz-disable-td">{{data.platform}}</td>
            <td class="nz-disable-td">{{data.version}}</td>
            <td class="nz-disable-td">{{data.upgradeNum}}</td>
            <td class="nz-disable-td">{{data.creator}}</td>
            <td class="nz-disable-td">{{data.createdAt}}</td>
            <td class="nz-disable-td">
              <a>Publish</a>
            </td>
          </tr>
          <tr [nzExpand]="data.expand">
            <td class="nz-disable-td"></td>
            <td class="nz-disable-td" colspan="7">
              <bgx-table #innerTable [nzData]="innerTableData" nzSize="middle" [nzShowPagination]="false">
                <thead class="ant-table-thead nz-disable-thead">
                  <tr>
                    <th class="nz-disable-th">Date</th>
                    <th class="nz-disable-th">Name</th>
                    <th class="nz-disable-th">Status</th>
                    <th class="nz-disable-th">Upgrade Status</th>
                    <th class="nz-disable-th">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let data of innerTable.data">
                    <td class="nz-disable-td">{{data.date}}</td>
                    <td class="nz-disable-td">{{data.name}}</td>
                    <td class="nz-disable-td">
                      <nz-badge [nzStatus]="'success'" [nzText]="'Finished'"></nz-badge>
                    </td>
                    <td class="nz-disable-td">{{data.upgradeNum}}</td>
                    <td class="nz-disable-td">
                      <span class="table-operation">
                        <nz-dropdown>
                          <a nz-dropdown class="operation">
                            Pause <i class="anticon anticon-down"></i>
                          </a>
                          <ul nz-menu>
                            <li nz-menu-item>
                              <a>Action 1</a>
                            </li>
                            <li nz-menu-item>
                              <a>Action 2</a>
                            </li>
                          </ul>
                        </nz-dropdown>
                        <a class="operation">Stop</a>
                        <a>More</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </bgx-table>
            </td>
          </tr>
        </ng-template>
      </tbody>
    </bgx-table>
  `,
  styles  : [
      `

      :host ::ng-deep .ant-table-expanded-row > td:last-child {
        padding: 0 48px 0 8px;
      }

      :host ::ng-deep .ant-table-expanded-row > td:last-child .ant-table-thead th {
        border-bottom: 1px solid #e9e9e9;
      }

      :host ::ng-deep .ant-table-expanded-row > td:last-child .ant-table-thead th:first-child {
        padding-left: 0;
      }

      :host ::ng-deep .ant-table-expanded-row > td:last-child .ant-table-row td:first-child {
        padding-left: 0;
      }

      :host ::ng-deep .ant-table-expanded-row .ant-table-row:last-child td {
        border: none;
      }

      :host ::ng-deep .ant-table-expanded-row .ant-table-thead > tr > th {
        background: none;
      }

      :host ::ng-deep .table-operation a.operation {
        margin-right: 24px;
      }
    `
  ]
})
export class BgxDemoTableNestedTableComponent implements OnInit {
  nestedTableData = [];
  innerTableData = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.nestedTableData.push({
        key       : i,
        name      : 'Screem',
        platform  : 'iOS',
        version   : '10.3.4.5654',
        upgradeNum: 500,
        creator   : 'Jack',
        createdAt : '2014-12-24 23:12:00',
        expand    : false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.innerTableData.push({
        key       : i,
        date      : '2014-12-24 23:12:00',
        name      : 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
  }
}
