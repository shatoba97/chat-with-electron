import { Inject, Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { filter, skip, takeUntil } from 'rxjs/operators';
import { LocalStorageIO } from '../model/local-storage.model';
import { User } from '../model/user.model';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject('LocalStorage') private localStorage: LocalStorageIO) {
    this.token$.next(this.localStorage.getItem('token'))
    this.token$.pipe(
      filter(t => !!t),
      untilDestroyed(this),
    )
      .subscribe(token => {
        this.localStorage.setItem('token', token);
      })
  }
  /** Current user */
  public currentUser$ = new BehaviorSubject<User>(null!);
  /**Token of current user */
  public token$ = new BehaviorSubject<string>(null!);
}