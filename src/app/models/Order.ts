import {ProductToBuy} from './ProductToBuy';

export class Order {


  constructor(id: number, shop_id: number, created: string, delivered: boolean, payed: boolean, products: ProductToBuy[]) {
    this.id = id;
    this.shop_id = shop_id;
    this.created = created;
    this.delivered = delivered;
    this.payed = payed;
    this.products = products;
  }



  id: number;
  shop_id: number;
  created: string;
  delivered: boolean;
  payed: boolean;
  products: ProductToBuy[];

  public totalPrice(): number {
    let result = 0;
    for (const product of this.products) {
      result += product.product.price * product.amount;
    }
    return result;
  }
}
