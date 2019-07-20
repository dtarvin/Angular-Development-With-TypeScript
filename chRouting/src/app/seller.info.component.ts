import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'seller',
  template: 'The seller is Mary Lou, id {{sellerID}} ',
  styles: [':host {background: yellow}']
})

export class SellerInfoComponent{
  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }
}
