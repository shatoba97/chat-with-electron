import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LocalStorageService } from '../service/local-store.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.localStorageService.token$.pipe(
      map(token => {
        
        if (!token) {
          return this.router.parseUrl('/login');
        }
        return !!token;
      }),
      tap(e =>console.log(e) )
    );
  }

}