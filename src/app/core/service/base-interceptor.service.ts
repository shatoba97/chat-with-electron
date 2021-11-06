import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LocalStoreService } from './local-store.service';

// @UntilDestroy()
@Injectable()
export class BaseInterceptorService implements HttpInterceptor {
  constructor(private localStoreService: LocalStoreService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.localStoreService.token$.pipe(
      untilDestroyed(this),
      switchMap(token => {
        if (!token) {
          return next.handle(req)  
        }
        const request = req.clone({
          setHeaders: {
            Authorization: 'Bearer' + token,
          }
        });
        return next.handle(req)
      })
    )
  }

}