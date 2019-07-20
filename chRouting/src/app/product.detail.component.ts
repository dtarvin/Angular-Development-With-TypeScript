import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  template: `<div class="product">
              <h1>Product detail for product: {{productId}}</h1>
              <router-outlet></router-outlet>
              <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
            </div>
            `,
  styles: ['.product {background: cyan']
})
export class ProductDetailComponent{
  productId: string;
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }
}
