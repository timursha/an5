import {Observable, Observer, of} from 'rxjs';
import {ProductToBuy} from '../models/ProductToBuy';


export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead
    return of(result as T);
  };
}


export function loadScript (scriptSource: string, objectName: string): Observable<any> {
  return Observable.create(function (observer: Observer<any>) {
    const node = document.createElement('script');
    node.src = scriptSource;
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    node.onload = () => {
      observer.next(window[objectName]);
    };
  });
}
// export function getProductsPrice(products: ProductToBuy[]): number {
//   let result = 0;
//   for (const product of products) {
//     result += product.amount * product.product.price;
//   }
//   return result;
// }
