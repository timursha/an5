import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Basket} from '../models/Basket';
import {Product} from '../models/Product';
import {catchError} from 'rxjs/internal/operators';
import {testBasket} from '../../devSets/testSets';
import {handleError} from './utils';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  getBasket(id: string): Observable<Basket> {
    return this.http.get<Basket>(`/api/orders/basket/${id}`).pipe(
      catchError(handleError('getBasket', testBasket))
    );
  }

  putInBasket(shop_id: number, product: Product, amount: number): void {
    this.http.post(`api/orders/basket/${shop_id}/add/`, {'product_id': product.id, 'amount': amount})
      .subscribe(value => console.log(value));
  }

  confirmBasket(shop_id: number): void {
    this.http.get(`api/orders/basket/${shop_id}/confirm/`)
      .subscribe(value => console.log(value));
  }
}

