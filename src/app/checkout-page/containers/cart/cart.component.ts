import { Component, OnInit } from '@angular/core';

import { ItemModel } from '../../models/item.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shippingPrice = 19;
  total = 0;
  backbags: ItemModel[] = [];
  shoes: ItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.backbags.push({
      name: 'Vintage Backbag',
      markedDownPrice: 54.99,
      actualPrice: 94.99
    });
    this.shoes.push({
      name: 'Levi Shoes',
      markedDownPrice: 74.99,
      actualPrice: 124.99
    });
  }

  removeBackbag(): void {
    this.backbags.pop();
  }

  addBackbag(): void {
    this.backbags.push({
      name: 'Vintage Backbag',
      markedDownPrice: 54.99,
      actualPrice: 94.99
    });
  }

  removeShoes(): void {
    this.shoes.pop();
  }

  addShoes(): void {
    this.shoes.push({
      name: 'Levi Shoes',
      markedDownPrice: 74.99,
      actualPrice: 124.99
    });
  }

  totalCost(): string {
    let backbagPrice = 0;
    this.backbags.forEach(val => {
      backbagPrice += val.markedDownPrice;
    });

    let shoesPrice = 0;
    this.shoes.forEach(val => {
      shoesPrice += val.markedDownPrice;
    });
    return (this.total + this.shippingPrice + backbagPrice + shoesPrice).toFixed(2);
  }
}
