import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Item as CartItem, Item } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartItems: CartItem[] = [];
  totalPrice = 0;


 constructor(private crd:CartService){
  this.cartItems=crd.getCartItems();
  console.log(this.cartItems);

 }

  Remove(item:CartItem) {
   console.log(item);
    this.crd.removeFromCart(item.title);
  }

  removeItem(id: number) { }

  clearCart() { }
}
