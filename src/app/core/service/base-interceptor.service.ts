import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { LocalStorageService } from './local-store.service';

@UntilDestroy()
@Injectable()
export class BaseInterceptorService implements HttpInterceptor {
  constructor(
    private localStoreService: LocalStorageService,
    private router: Router,
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.localStoreService.token$.pipe(
      take(1),
      untilDestroyed(this),
      switchMap(token => {
        if (!token) {
          return next.handle(req)
        }

        const request = req.clone({
          setHeaders: {
            'Authorization': 'Bearer ' + token
          }
        });
        return next.handle(request)
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.router.navigate(['login']);
          this.localStoreService.token$.next('');
        }
        return of(error);
      })
    )
  }

}