import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(  private http: HttpClient ) {}

  private cartvalue = new BehaviorSubject<any>('');
  currentCart = this.cartvalue.asObservable();
  

  // addToCart(prod: object){
  //   this.cartvalue.next(prod);
  // }

  addToCart(product:any) { // console.log(product);
 let p = product;
    // this.items.forEach( (item, index) => {
    //   if(item.category === product.category) this.items.splice(index,1);
    // });

    this.items = {...this.items, ...product};
    this.cartvalue.next(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  //  console.log(" Clean Cart "+this.items);
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}