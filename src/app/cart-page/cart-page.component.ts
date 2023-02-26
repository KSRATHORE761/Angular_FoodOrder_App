import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CardItem } from '../shared/models/CarItem';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart
  constructor(private cartService : CartService){
    this.setCart();
  }
  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CardItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CardItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
