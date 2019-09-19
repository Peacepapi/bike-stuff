import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: Array<Product>;
  public cart: Array<CartItem>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):[];
    
    this.productsService.fetchProducts();
    this.productList = this.productsService.getProducts();
  }
  addCartItem(item: CartItem) {
    this.cartService.addToCart(this.cart, item);
  }

  deleteItem() {
    this.cartService.deleteFromCart(this.cart, this.cart[0]);
  }
}
