import {Component, OnInit} from '@angular/core';
import {Store} from '../../../models/Store';
import {StoreService} from '../../../services/store.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';

@Component({
  templateUrl: './partnermenu.component.html',
  styleUrls: ['./partnermenu.component.css']
})
export class PartnerMenuComponent implements OnInit {
  store: Store;

  constructor(private storeService: StoreService,
              private productService: ProductService) {

  }

  ngOnInit() {
    this.storeService.getAdminStore().subscribe((store: Store) => this.store = store);

  }

  deleteProduct(product: Product) {
    this.store.products.splice(this.store.products.indexOf(product, 0), 1);
    this.productService.deleteProduct(product.id);
  }




}
