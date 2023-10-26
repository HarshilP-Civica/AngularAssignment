import { Component } from '@angular/core';
import { Discount } from '../model/discount.model';

@Component({
  selector: 'discount-coupon',
  templateUrl: './discount-coupon.component.html',
})
export class DiscountCouponComponent {
  public showAlert: boolean = false;

  constructor( public discount: Discount) {
  }


  setValue()
  {
    this.discount.setCouponValue();
    this.showAlert = true;
  }
}
