import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'Product-Description',
  templateUrl: './productDescription.component.html',
})
export class ProductDescriptionComponent {
  // editing: boolean = false;
  product: Product = new Product();

  constructor(
    public cart: Cart,
    public router: Router,
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {

    Object.assign(
      // ES5 method
      this.product,
      repository.getProduct(activeRoute.snapshot.params['id'])
    );
  }

  // get products(): Product[] {
  //   return this.repository
  //     .getProducts(this.selectedCategory)
  //     .slice(pageIndex, pageIndex + this.productsPerPage);
  // }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
}
