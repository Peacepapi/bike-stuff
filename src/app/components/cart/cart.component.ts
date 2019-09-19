import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ValidatorService } from 'src/app/services/validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart: Array<CartItem>;
  public subTotal: number = 0;
  public isValidQty: boolean = true;
  public hasBike: boolean = true;
  public message: string;

  constructor(
    private cartService: CartService,
    private validatorService: ValidatorService,
    private router: Router) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.validateCart();
    this.calSubTotal();
  }

  calSubTotal() {
    this.subTotal = this.cartService.calSubTotal(this.cart);
  }

  deleteItem(item) {
    this.cartService.deleteFromCart(this.cart, item);
    this.validateCart();
    this.calSubTotal();
  }

  validateInput(item, val) {
    this.isValidQty = this.validatorService.validateInput(val);
    this.cartService.updateCart(this.cart, item);
    if(this.isValidQty) this.calSubTotal();
  }

  validateCart() {
    this.hasBike = this.cart.find(item => item.product.product_type === 'bike') ? true:false;
    if(!this.hasBike)
      this.message = 'Please include at least one bike in order to checkout';
    else
      this.message = '';
  }
  placeOrder() {
    this.router.navigate(['/confirmation', JSON.stringify(this.cart)]);
    localStorage.setItem('cart', '[]');
  }
}
