/**
 * Created by rejhan on 28.11.2017.
 */
import {  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Injectable,Injector } from '@angular/core'
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector,private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var auth = this.injector.get(AuthService)
    var authRequest = req.clone({
      headers: req.headers.set('Authorization','token ' + auth.token)
    })
    return next.handle(authRequest).do(event => {}, err => {
      if (err instanceof HttpErrorResponse && err.status == 401) {
        this.router.navigate(['login']);
      }
    });
  }

}
