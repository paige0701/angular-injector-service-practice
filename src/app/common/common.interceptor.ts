// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
//
// import {Observable} from 'rxjs/Observable';
//
// @Injectable()
// export class NoopInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(req);
//   }
// }


import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  intercept(req : HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
