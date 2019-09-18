import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable()
export class CartService {

    addToCart(cart: Array<CartItem>, item: CartItem) {
        let product = cart.find(x => x.product.id === item.product.id);

        if(product) {
          product.quantity += item.quantity;
        } else {
          cart.push(item);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateCart(cart: Array<CartItem>, item: CartItem) {
        let updatedCart = cart.map(currentItem => {
            if(currentItem.product.id === item.product.id) {
                return item;
            }
            return currentItem;
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    deleteFromCart(cart: Array<CartItem>, item: CartItem) {
        let index = cart.findIndex(x => x.product.id == item.product.id);
        cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    calSubTotal(cart) {
        let subTotal = 0;
        cart.forEach(item => {
            subTotal += item.product.price * item.quantity;
        })
        return subTotal;
    }
}