import {Product} from './Product';

export class Store {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;

  products: Product[];
}
