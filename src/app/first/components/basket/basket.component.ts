import {Component, OnInit} from '@angular/core';
import {Basket} from '../../models/Basket';
import {BasketService} from '../../services/basket.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {ProductToBuy} from '../../models/ProductToBuy';

// import { ITEMS } from '/item'
@Component({
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Basket;
  constructor(private basketService: BasketService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.basketService.getBasket(params.get('id')))
    ).subscribe((basket: Basket) => this.basket = basket);
  }
  //
  // confirmBasket(): void {
  //   this.basketService.confirmBasket(this.basket.shop);
  // }

  getTotalPrice(): number {
    let result = 0;
    for (const product of this.basket.products) {
      result += product.amount * product.product.price;
    }
    return result;
  }

  increase(product: ProductToBuy): void {
    product.amount += 1;
    this.basketService.putInBasket(this.basket.shop, product.product, 1);
  }


  decrease(product: ProductToBuy): void {
    if (product.amount !== 0) {
      product.amount -= 1;

      this.basketService.putInBasket(this.basket.shop, product.product, -1);

    }
  }

  confirmBasket(): void {
    this.basketService.confirmBasket(this.basket.shop);
    this.router.navigate(['/menu', this.basket.shop]);
  }
}
