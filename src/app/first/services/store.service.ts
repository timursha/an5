import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {Store} from "../models/Store";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";
import {handleError} from "./utils";
import {testStore} from "../../devSets/testSets";

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
}
