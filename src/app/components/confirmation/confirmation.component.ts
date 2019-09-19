import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  public purchased: Array<CartItem>;
  public subTotal: number;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    ) { }

  ngOnInit() {
    this.purchased = JSON.parse(this.route.snapshot.paramMap.get('data'));
    this.subTotal = this.cartService.calSubTotal(this.purchased);
  }
}
