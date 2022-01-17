import { AllChatsResponse } from '@core/model/all-chats-response.model';
import { HttpClientBase } from './http-client.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreviewChatIO } from '../model/preview-chat.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    private httpClient: HttpClientBase,
  ) { }

  public createChat(name: string): Observable<void> {
    const body = { 'chatName': name }
    return this.httpClient.post<void>('chat', body);
  }

  public getAllPreviewChats(): Observable<PreviewChatIO[]> {
    return this.httpClient.get<AllChatsResponse>('chats').pipe(
      map(res => res.chats),
      // map(res=> mapDto<T>(res))
    );
  }
}