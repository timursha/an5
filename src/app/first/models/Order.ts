import {ProductToBuy} from './ProductToBuy';

export class Order {


  constructor(id: number, created: string, delivered: boolean, products: ProductToBuy[]) {
    this.id = id;
    this.created = created;
    this.delivered = delivered;
    this.products = products;
  }

  id: number;
  created: string;
  delivered: boolean;
  products: ProductToBuy[];

  public totalPrice(): number {
    let result = 0;
    for (const product of this.products) {
      result += product.product.price * product.amount;
    }
    return result;
  }
}
