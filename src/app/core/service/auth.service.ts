import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoginCredIO } from 'src/app/pages/login/login-page/model/login-creds.model';
import { AuthResponseIO } from '../model/auth-response.model';
import { User } from '../model/user.model';
import { HttpClientBase } from './http-client.service';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private httpClient: HttpClientBase,
    private localStoreService: LocalStoreService,
  ) { }

  public auth(creds: LoginCredIO): Observable<User> {
    const authHeader = new HttpHeaders()
      .set("Authorization", "Basic " + btoa(`${creds.login}:${creds.password}`));

    const httpOptions = {
      headers: authHeader
    };

    return this.httpClient.post<AuthResponseIO>('auth', null, httpOptions).pipe(
      tap(request => console.log(request)),
      switchMap(request => {
        this.localStoreService.token$.next(request.token);
        return this.getUser();
      })
    )
  }

  private getUser(): Observable<User> {
    return this.httpClient.get('user');
  }
}