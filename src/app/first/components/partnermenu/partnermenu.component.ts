///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Store} from '../../models/Store';
import {StoreService} from '../../services/store.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product';

// import { ITEMS } from '/item'
@Component({
  templateUrl: './partnermenu.component.html',
  styleUrls: ['./partnermenu.component.css']
})
export class PartnerMenuComponent implements OnInit{
  store: Store;

  constructor(private storeService: StoreService,
              private route: ActivatedRoute,
              private productService: ProductService) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.storeService.getStore(params.get('id')))
    ).subscribe((store: Store) => this.store = store);
  }

  deleteProduct(product: Product) {
    this.store.products.splice(this.store.products.indexOf(product, 0), 1);
    this.productService.deleteProduct(product.id);
  }




}
