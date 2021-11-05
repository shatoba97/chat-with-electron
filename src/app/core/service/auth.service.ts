import { Injectable } from '@angular/core';
import { CredsIO } from '../model/creds.model';
import { HttpClientBase } from './http-client.service';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private httpClient: HttpClientBase,
  ) {}

  public auth(creds: CredsIO): void {
    this.httpClient.post('auth')
  }
}