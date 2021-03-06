import { Injectable } from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {


  constructor(private httpClient: HttpClient,
              private router: Router,
              private location: Location) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(user: User): Observable<any> {
    return this.httpClient.post<any>('api/api-token-auth/', {'username': user.username, 'password': user.password}).pipe(
      catchError(err => {
        console.log(`This is error`);
        console.log(err);
        return of(err);
      }),
      map((data: any) => {

        if (data.token) {
          localStorage.setItem('token', data.token);
          this.location.back();
          return null;
        } else {
          if (data.status === 400) {
            return data.error;
          }
        }
        return null;

      })
    );


  }



}
