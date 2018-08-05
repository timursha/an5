import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {testOrder, testProduct} from '../devSets/testSets';
import {handleError} from './utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  deleteProduct(id: number): void {
    this.http.delete(`api/map/admin/product/${id}/`).subscribe(res => console.log(res));
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`api/map/products/${id}/`).pipe(
      catchError(handleError('getProduct', testProduct))
    );
  }

  editProduct(product: any): void {
    console.log(product);
    this.http.patch(`api/map/admin/product/${product.id}/`, product).subscribe(res => console.log(res));
  }

  createProduct(product: Product): void {
    this.http.post('api/map/product', product).subscribe(res => console.log(res));
  }
}
