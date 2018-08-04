import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductService} from '../../../services/product.service';
import {switchMap} from 'rxjs/internal/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')))
    ).subscribe((product: Product) => this.product = product);
  }

  onSubmit(product: Product): void {
    this.productService.editProduct(product);
    this.router.navigate(['/partnermenu']);
  }

}
