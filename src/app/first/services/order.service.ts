import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/Order';
import {testOrder, testOrders} from '../../devSets/testSets';
import {catchError, map} from 'rxjs/internal/operators';
import {handleError} from './utils';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAvailableOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('api/orders/shop/').pipe(
      catchError(handleError('getBasket', testOrders))
    );
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`api/orders/shop/${id}`).pipe(
      catchError(handleError('getOrder', testOrder))
    );
  }

  getClientOrder(id: string): Observable<any> {
    return this.http.get(`api/orders/client/${id}`).pipe(
      map((plain: any) => new Order(plain.id, plain.shop_id, plain.created, plain.delivered, plain.payed, plain.products)),
      catchError(handleError('getOrder', testOrder))
    );
  }
}

