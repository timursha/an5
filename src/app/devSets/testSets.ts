import {Product} from '../first/models/Product';
import {ProductToBuy} from '../first/models/ProductToBuy';
import {Basket} from '../first/models/Basket';
import {Store} from '../first/models/Store';
import {Order} from '../first/models/Order';


export const testProducts: Product[] = [
  {
    id: 1,
    price: 100,
    name: 'Test product 1',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 1',
    category: '123',
  },
  {
    id: 2,
    price: 100,
    name: 'Test product 2',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 2',
    category: '123',
  },
  {
    id: 3,
    price: 102,
    name: 'Test product 3',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 3',
    category: '123',
  },
  {
    id: 4,
    price: 103,
    name: 'Test product 4',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 4',
    category: '123',
  },
  {
    id: 5,
    price: 104,
    name: 'Test product 5',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 5',
    category: '123',
  },
  {
    id: 6,
    price: 105,
    name: 'Test product 6',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 6',
    category: '123',
  },
  {
    id: 7,
    price: 106,
    name: 'Test product 7',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 7',
    category: '123',
  },
  {
    id: 8,
    price: 107,
    name: 'Test product 8',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 8',
    category: '123',
  },
  {
    id: 9,
    price: 108,
    name: 'Test product 9',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 9',
    category: '123',
  },
  {
    id: 10,
    price: 109,
    name: 'Test product 10',
    photo: 'http://oss2014.adm.ntu.edu.sg/marla/wp-content/uploads/sites/20/2014/01/test.jpg',
    description: 'This is test product 10',
    category: '123',
  },

];

export const testProduct: Product = testProducts[0];


export const testProductsToBuy: ProductToBuy[] = [
  {product: testProducts[0], amount: 1},
  {product: testProducts[1], amount: 3},
  {product: testProducts[3], amount: 5},
  {product: testProducts[5], amount: 7},
  {product: testProducts[7], amount: 9},
  {product: testProducts[9], amount: 11},

];


export const testBasket: Basket = {
  id: 1,
  shop: 1,
  products: testProductsToBuy,
};


export const testOrders: Order[] = [
  new Order(1, '12:11', false, testProductsToBuy),
  new Order(2, '12:13', false, testProductsToBuy),
  new Order(3, '12:20', false, testProductsToBuy),
  new Order(4, '12:19', false, testProductsToBuy),
  new Order(5, '12:15', false, testProductsToBuy),
  new Order(6, '12:10', false, testProductsToBuy),
  new Order(7, '12:21', false, testProductsToBuy),
  new Order(8, '12:25', false, testProductsToBuy),
  new Order(9, '12:30', false, testProductsToBuy),
];

export const testOrder: Order = new Order(1, '12:21', false, testProductsToBuy);

export const testStore: Store = {
  id: 1,
  title: 'Test store',
  description: 'Test description',
  latitude: 57,
  longitude: 37,
  products: testProducts,
};

// export const testOrder: Order =  {
//   id: 1,
//   shop: 1,
//   products: testProductsToBuy,
//
//   delivered: false,
//   deliveredAt: null,
//   createdAt: '22:00 12.12.12'
// }

// export function getTestSet<T>(): T {
//   console.log(T);
//   console.log(Basket.prototype);
//   console.log(Basket);
//   switch (T) {
//     case Basket.prototype: {
//       console.log('test Basket returned');
//       return testSets;
//     }
//
//     case Store.prototype: {
//       console.log('test Store returned');
//       return testStore;
//     }
//
//   }
// }

