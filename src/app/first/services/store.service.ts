import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '../models/Store';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {handleError} from './utils';
import {testStore, testStores} from '../../devSets/testSets';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) {
  }

  getStore(id: string): Observable<Store> {
    return this.http.get<Store>(`api/map/shops/${id}/`).pipe(
      catchError(handleError('getStore', testStore))
    );
  }

  getAdminStore(): Observable<Store> {
    return this.http.get<Store>(`api/map/admin/shop/`).pipe(
      catchError(handleError('getStore', testStore))
    );
  }

  getStoreList(): Observable<Store[]> {
    return this.http.get<Store[]>(`api/map/shops/`).pipe(
      catchError(handleError('getStoreList', testStores))
    );
  }

}
