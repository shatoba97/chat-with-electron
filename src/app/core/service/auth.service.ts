import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, switchMap, tap } from 'rxjs/operators';
import { LoginCredIO } from 'src/app/pages/login/login-page/model/login-creds.model';
import { RegisterUserFormIO } from 'src/app/pages/login/register/modal/register-user.model';
import { AuthResponseIO } from '../model/auth-response.model';
import { User } from '../model/user.model';
import { HttpClientBase } from './http-client.service';
import { LocalStorageService } from './local-store.service';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private httpClient: HttpClientBase,
    private localStoreService: LocalStorageService,
  ) { }

  public auth(creds: LoginCredIO): Observable<void> {
    const authHeader = new HttpHeaders()
      .set("Authorization", "Basic " + btoa(`${creds.login}:${creds.password}`));

    const httpOptions = {
      headers: authHeader
    };

    return this.httpClient.post<AuthResponseIO>('auth', null, httpOptions).pipe(
      tap(request => {
        this.localStoreService.token$.next(request.token);
      }),
      mapTo(void 0),
    )
  }

  /**
   * Method for regist new user
   * @param user User data
   */
  public registerUser(user: RegisterUserFormIO): Observable<AuthResponseIO> {
    return this.httpClient.post<AuthResponseIO>('register-user', user).pipe(
      tap(({ token }) => {
        if (token) {
          this.localStoreService.token$.next(token);
        }
      })
    )
  }

  /**
   * Get info about current user
   * @returns User data
   */
  public getUser(): Observable<User> {
    return this.httpClient.get('user');
  }
}