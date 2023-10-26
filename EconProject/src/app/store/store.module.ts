import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { cartDetail } from './cartDetail.component';
import { cartSummaryComponent } from './cartSummary.component';
import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { DiscountCouponComponent } from './discount-coupon.component';
import { FormsModule } from '@angular/forms';
import { ProductDescriptionComponent } from './productDescription.component';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  declarations: [StoreComponent, cartSummaryComponent, cartDetail, DiscountCouponComponent, CheckoutComponent, ProductDescriptionComponent], // register and launch
  exports: [StoreComponent, cartDetail, CheckoutComponent, DiscountCouponComponent],// sharing component across angular modules
  providers: [DiscountCouponComponent],
})
export class StoreModule { }
