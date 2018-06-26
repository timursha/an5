import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    console.log(req.url);
    if (!req.url.startsWith('api/api-token-auth/')) {
      console.log('I am in');
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
