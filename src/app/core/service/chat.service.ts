import { Observable, of } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

import { AllChatsResponse } from '@core/interface/all-chats-response.model';
import { ChatIO } from '@core/interface/chat.model';
import { HttpClientBase } from './http-client.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreviewChatIO } from '@core/interface/preview-chat.model';
import { chat } from '@core/mock-data/chat.mock';
import { chatsPreview } from '@core/mock-data/chats-preview.mock';

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
    return of(chatsPreview);
    return this.httpClient.get<AllChatsResponse>('chats-preview').pipe(
      map(res => res.chats),
      // map(res=> mapDto<T>(res))
    );
  }

  public getChatInfo(id: number): Observable<ChatIO> {
    return of(chat);
    // return this.httpClient.get<ChatIO>('chats');
  }

  // public getChatMessage
}