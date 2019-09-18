import { Component, OnInit } from '@angular/core';
import { CartItem } from './models/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private cart: Array<CartItem>
  title = 'ecommerce-example';

  ngOnInit() {
    this.cart = null;
  }
}
