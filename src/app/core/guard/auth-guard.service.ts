import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStoreService } from '../service/local-store.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private localStorage: LocalStoreService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.localStorage.token$.pipe(
      map(token => !!token)
    );
  }

}