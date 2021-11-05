import { HttpClient, HttpResponse as HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientBase {
  constructor(private httpClient: HttpClient) {}

  public post<T>(url: string, body?: any | null, options?: any): Observable<T> {
    return this.httpClient.post<T>(`${environment.baseUrl}/${url}`, body, options);
  }
}