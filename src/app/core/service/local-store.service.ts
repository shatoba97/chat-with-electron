import { Inject, Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { filter, skip, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { LocalStorageIO } from '../model/local-storage.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    @Inject('LocalStorage') private localStorage: LocalStorageIO,
  ) {
    this.token$.next(this.localStorage.getItem('token'))
    this.token$.pipe(
      filter(t => !!t),
      tap(token => {
        this.localStorage.setItem('token', token);
      }),
      untilDestroyed(this),
    )
      .subscribe();
  }
  /** Current user */
  public currentUser$ = new BehaviorSubject<User>(null!);
  /**Token of current user */
  public token$ = new BehaviorSubject<string>(null!);
}