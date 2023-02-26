import { Injectable } from '@angular/core';
import { CardItem } from '../shared/models/CarItem';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart:Cart=new Cart();

 addToCart(food:Foods) : void{
  let cartItem = this.cart.items.find(item => item.food.id === food.id);
  if(cartItem){
    this.changeQuantity(food.id,cartItem.quantity+1);
    return;
  }
  this.cart.items.push(new CardItem(food));
 }

 removeFromCart(foodId:number){
  this.cart.items = this.cart.items.filter(item => item.food.id!==foodId);
 }
 changeQuantity(foodId:number,quantity:number){
  let cartItem = this.cart.items.find(item => item.food.id===foodId);
  if(!cartItem){
    return;
  }
  cartItem.quantity = quantity;
  cartItem.food.price = quantity * cartItem.food.price;
 }
 getCart():Cart{
  return this.cart
 }
}
