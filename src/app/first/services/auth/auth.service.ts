import { Injectable } from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {


  constructor(private httpClient: HttpClient,
              private router: Router,
              private location: Location) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(user: User): void {
    this.httpClient.post<{'token': string}>('api/api-token-auth/', {'username': user.username, 'password': user.password})
      .subscribe((data: any) => {
        console.log(data.message);
        localStorage.setItem('token', data.token);
        this.location.back();
      });

  }



}
