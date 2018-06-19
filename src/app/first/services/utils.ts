import {Observable, of} from 'rxjs';
import {ProductToBuy} from '../models/ProductToBuy';


export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead
    return of(result as T);
  };
}

// export function getProductsPrice(products: ProductToBuy[]): number {
//   let result = 0;
//   for (const product of products) {
//     result += product.amount * product.product.price;
//   }
//   return result;
// }
