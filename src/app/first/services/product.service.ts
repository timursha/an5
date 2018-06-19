import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  deleteProduct(id: number): void {
    this.http.delete(`api/map/admin/product/${id}`).subscribe(res => console.log(res));
  }
}
