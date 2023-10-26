import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasouce';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Discount } from './discount.model';

@NgModule({
  imports: [HttpClientModule],
  // exports: [],
  providers: [StaticDataSource, ProductRepository, Cart, Order, OrderRepository, Discount,
  {provide: StaticDataSource, useClass: RestDataSource}],
})
export class ModelModule { }
