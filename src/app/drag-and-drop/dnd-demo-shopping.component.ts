import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-demo5',
  template: `
<div nz-row [nzGutter]="8">
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="可拖动的产品">
      <div class="col" *ngFor="let product of availableProducts"
        buiDraggable [dragEnabled]="product.quantity>0" [removeTransition]="true" [dragData]="product" (onDragSuccess)="orderedProduct($event)" [dropZones]="['demo1']">
        <div [hidden]="product.quantity===0">{{product.name}} - \${{product.cost}}<br>(available: {{product.quantity}})</div>
        <div [hidden]="product.quantity>0"><del>{{product.name}}</del><br>(NOT available)</div>
      </div>
    </nz-card>
  </div>
  <div nz-col [nzSpan]="6">
    <nz-card style="width:300px;" nzTitle="购物车" buiDroppable (onDropSuccess)="addToBasket($event)" [dropZones]="['demo1']">
      <p>金额: \${{totalCost()}}</p>
      <div *ngFor="let product of shoppingBasket">
        <div class="col">
        {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: \${{product.cost * product.quantity}})
        </div>
      </div>
    </nz-card>
  </div>
</div>

  `,
  styleUrls: ['./drag-and-drop-demo.component.less']
})
export class DndDemoShoppingComponent {
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product> = [];

  constructor() {
    this.availableProducts.push(new Product('Blue Shoes', 3, 35));
    this.availableProducts.push(new Product('Good Jacket', 1, 90));
    this.availableProducts.push(new Product('Red Shirt', 5, 12));
    this.availableProducts.push(new Product('Blue Jeans', 4, 60));
  }

  orderedProduct($event: any) {
    let orderedProduct: Product = $event.dragData;
    orderedProduct.quantity--;
  }

  addToBasket($event: any) {
    let newProduct: Product = $event.dragData;
    // tslint:disable-next-line:forin
    for (let indx in this.shoppingBasket) {
      let product: Product = this.shoppingBasket[indx];
      if (product.name === newProduct.name) {
        product.quantity++;
        return;
      }
    }
    this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    this.shoppingBasket.sort((a: Product, b: Product) => {
      return a.name.localeCompare(b.name);
    });
  }

  totalCost(): number {
    let cost: number = 0;
    for (let indx in this.shoppingBasket) {
      let product: Product = this.shoppingBasket[indx];
      cost += (product.cost * product.quantity);
    }
    return cost;
  }
}

class Product {
  constructor(public name: string, public quantity: number, public cost: number) { }
}
