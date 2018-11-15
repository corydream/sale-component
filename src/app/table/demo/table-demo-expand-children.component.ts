import { Component, OnInit } from '@angular/core';

export interface TreeNodeInterface {
  key: number;
  name: string;
  age: number;
  level: number;
  expand: boolean;
  address: string;
  children?: TreeNodeInterface[];
}

@Component({
  selector: 'app-table-demo-expand-children',
  template: `
    <bgx-table #nzTable [nzData]="data">
      <thead class="ant-table-thead nz-disable-thead">
        <tr>
          <th class="nz-disable-th" nzWidth="40%">Name</th>
          <th class="nz-disable-th" nzWidth="30%">Age</th>
          <th class="nz-disable-th">Address</th>
        </tr>
      </thead>
      <tbody>
        <ng-template ngFor let-data [ngForOf]="nzTable.data">
          <ng-template ngFor let-item [ngForOf]="expandDataCache[data.key]">
            <tr *ngIf="(item.parent&&item.parent.expand)||!(item.parent)">
              <td class="nz-disable-td" [nzIndentSize]="item.level*20" [nzShowExpand]="!!item.children" [(nzExpand)]="item.expand" (nzExpandChange)="collapse(expandDataCache[data.key],item,$event)">
                {{item.name}}
              </td>
              <td class="nz-disable-td">{{item.age}}</td>
              <td class="nz-disable-td">{{item.address}}</td>
            </tr>
          </ng-template>
        </ng-template>
      </tbody>
    </bgx-table>`,
  styles  : []
})
export class BgxDemoTableExpandChildrenComponent implements OnInit {
  data = [
    {
      key     : 1,
      name    : 'John Brown sr.',
      age     : 60,
      address : 'New York No. 1 Lake Park',
      children: [
        {
          key    : 11,
          name   : 'John Brown',
          age    : 42,
          address: 'New York No. 2 Lake Park'
        },
        {
          key     : 12,
          name    : 'John Brown jr.',
          age     : 30,
          address : 'New York No. 3 Lake Park',
          children: [ {
            key    : 121,
            name   : 'Jimmy Brown',
            age    : 16,
            address: 'New York No. 3 Lake Park'
          } ]
        },
        {
          key     : 13,
          name    : 'Jim Green sr.',
          age     : 72,
          address : 'London No. 1 Lake Park',
          children: [
            {
              key     : 131,
              name    : 'Jim Green',
              age     : 42,
              address : 'London No. 2 Lake Park',
              children: [
                {
                  key    : 1311,
                  name   : 'Jim Green jr.',
                  age    : 25,
                  address: 'London No. 3 Lake Park'
                },
                {
                  key    : 1312,
                  name   : 'Jimmy Green sr.',
                  age    : 18,
                  address: 'London No. 4 Lake Park'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key    : 2,
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  expandDataCache = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack = [];
    const array = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[ i ], level: node.level + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: object, array: TreeNodeInterface[]): void {
    if (!hashMap[ node.key ]) {
      hashMap[ node.key ] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.data.forEach(item => {
      this.expandDataCache[ item.key ] = this.convertTreeToList(item);
    });
  }
}
