import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../models/Product';
import {ProductService} from '../../../services/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './productForm.component.html',
  styleUrls: ['./productForm.component.css']
})

export class ProductFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Product>();
  @Input() product: Product;

  productForm: FormGroup;

  ngOnInit() {

    console.log(this.product);

    this.productForm = new FormGroup({
      'name': new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]),
      'description': new FormControl(this.product.description, [Validators.minLength(10)]),
      'price': new FormControl(this.product.price, [Validators.required, Validators.min(0)]),
      'photo': new FormControl(this.product.photo,
        [Validators.pattern('((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*')]),
      'category': new FormControl(this.product.category, [Validators.required, Validators.minLength(3)])
    });
  }

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  get name() { return this.productForm.get('name'); }

  get description() { return this.productForm.get('description'); }

  get price() { return this.productForm.get('price'); }

  get photo() { return this.productForm.get('photo'); }

  get category() { return this.productForm.get('category'); }

  submitForm(): void {
    console.log(this.product);
    if (this.productForm.valid) {
      this.submit.emit({id: this.product.id,
      name: this.productForm.get('name').value,
        description: this.productForm.get('description').value,
        price: this.productForm.get('price').value,
        photo: this.productForm.get('photo').value,
        category: this.productForm.get('category').value,
      });
    }
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
