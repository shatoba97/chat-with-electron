import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../service/local-store.service';

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
      })
    );
  }

}