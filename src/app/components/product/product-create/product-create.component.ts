import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.product = new Product();
  }

  onSubmit(product: Product): void {
    this.productService.createProduct(product);
    this.router.navigate(['/partner/menu']);
  }

}
