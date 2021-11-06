import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  /** Current user */
  public currentUser$ = new BehaviorSubject<User>(null!);
  /**Token of current user */
  public token$ = new BehaviorSubject<string>(null!);
}