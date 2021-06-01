import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];

  constructor() { }

  addToCart(product) {
//    const productExistInCart = this.items.find(({name}) => name === product.name); 
//   if (!productExistInCart) {
//     this.items.push({...product, num:1}); 
//     return;
//   }
 //  productExistInCart.num += 1;
   this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
