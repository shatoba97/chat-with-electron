import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-store.service';

@Injectable()
export class BaseErrorHandlerService implements ErrorHandler {
  constructor(private router: Router, private ngZone: NgZone, private localStorageService: LocalStorageService) { }
  public handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.localStorageService.token$.next('');
        this.ngZone.run(() => this.router.navigate(['login']));
      }
      console.log(error);
    }
  }

}