import { Component, OnInit } from '@angular/core';
import {ProductToBuy} from '../../models/ProductToBuy';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {forkJoin} from 'rxjs';
import {Store} from '../../models/Store';
import {StoreService} from '../../services/store.service';
import {Product} from '../../models/Product'
import {BasketService} from '../../services/basket.service';
import {parseCookieValue} from '@angular/common/src/cookie';

@Component({
  templateUrl: './changeProduct.component.html',
  styleUrls: ['./changeProduct.component.css']
})

export class ChangeProductComponent implements OnInit {

  product: Product;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const productId = params.get('id');
      const store$ = this.storeService.getStore('0');

      store$.subscribe((store) => {
        const product = store.products.find((element)  => {
          return element.id === parseInt(productId);
        })
        this.product = product;
        console.log('ELEEMNT IS', product);
      });
    });
  }

  constructor(private route: ActivatedRoute,
              private storeService: StoreService) {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const store$ = this.storeService.getStore(params.get('id'));
    //   const basket$ = this.basketService.getBasket(params.get('id'));
    //
    //   forkJoin(store$, basket$).subscribe(([store, basket]) => {
    //     // const store = results[0];
    //     // const basket = results[1];
    //     this.store = store;
    //     this.products = [];
    //     console.log(this.products);
    //
    //     for (const product of basket.products) {
    //       this.products.push(product);
    //     }
    //     console.log(this.products);
    //     for (const storeProduct of store.products) {
    //       let productInProducts = false;
    //
    //       for (const product of this.products) {
    //         if (product.product.id === storeProduct.id) {
    //           productInProducts = true;
    //           break;
    //         }
    //       }
    //       console.log(this.products);
    //
    //       if (!productInProducts) {
    //         this.products.push({'product': storeProduct, 'amount': 0});
    //       }
    //     }
    //   });
    // });
  }
  // public store: Store;
  // public products: ProductToBuy[];
  //
  // increase(product: ProductToBuy): void {
  //   product.amount += 1;
  //   this.basketService.putInBasket(this.store.id, product.product, 1);
  // }
  //
  //
  // decrease(product: ProductToBuy): void {
  //   if (product.amount !== 0) {
  //     product.amount -= 1;
  //
  //     this.basketService.putInBasket(this.store.id, product.product, -1);
  //
  //   }
  // }
}
