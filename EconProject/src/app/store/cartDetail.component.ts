import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';
import { Discount } from '../model/discount.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cartDetail.component.html',
})
export class cartDetail {
  public couponIsApplied: boolean = false;

  constructor(
    public cart: Cart,
    public router: Router,
    public discount: Discount
  ) {
    console.log('coupon value', this.discount.coupounValue);
  }
  applyDiscount()
  {
    this.couponIsApplied = true;
  }

}
