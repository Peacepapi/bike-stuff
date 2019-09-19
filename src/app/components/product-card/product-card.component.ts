import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  public isValidQty: boolean = true;

  @Input()
  public product: Product;
  
  @Output()
  public cartItem = new EventEmitter<CartItem>();

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {
  }

  addToCart(item, qty) {
    let newCartItem = new CartItem();
    newCartItem.map(item, Number(qty));

    this.cartItem.emit(newCartItem);
  }

  validateInput(val) {
    this.isValidQty = this.validatorService.validateInput(val);
  }
}
