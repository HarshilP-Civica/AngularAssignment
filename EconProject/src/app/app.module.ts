import { StoreFirstGuard } from './store.FirstGuard';
import { cartDetail } from './store/cartDetail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { RouterModule } from '@angular/router';
import { DiscountCouponComponent } from './store/discount-coupon.component';
import { ProductDescriptionComponent } from './store/productDescription.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'discount',
        component: DiscountCouponComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      { path: 'product/:id',
      component: ProductDescriptionComponent },
      {
        path: 'cart',
        component: cartDetail,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      { path: '**', redirectTo: '/discount' },
    ]),
  ],

  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
