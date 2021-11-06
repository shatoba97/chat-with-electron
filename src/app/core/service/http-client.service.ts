import { HttpClient, HttpResponse as HttpEvent, HttpResponse, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, OperatorFunction, Subscriber } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ResponseIO } from '../model/response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpClientBase {
  constructor(private httpClient: HttpClient) { }

  public post<T>(url: string, body?: any | null, options?: any): Observable<T> {
    return this.httpClient.post(`${environment.baseUrl}/${url}`, body, options).pipe(
      this.mappingRequest<T>() as any
    )
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.httpClient.get<ResponseIO<T>>(`${environment.baseUrl}/${url}`, options).pipe(
      this.mappingRequest<T>() as any
    )
  }

  public put<T>(url: string, options?: any): Observable<T> {
    return this.httpClient.put<ResponseIO<T>>(`${environment.baseUrl}/${url}`, options).pipe(
      this.mappingRequest<T>()
    )
  }

  private mappingRequest<T>(): OperatorFunction<ResponseIO<T>, T> {
    return map((resp: ResponseIO<T>) => {
      if(resp.error && Object.keys(resp.error).length) {
        throw resp.error;
      }

      return resp.results;
    })
  }
}