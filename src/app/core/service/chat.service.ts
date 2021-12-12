import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreviewChatIO } from '../model/preview-chat.model';
import { HttpClientBase } from './http-client.service';

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
    return this.httpClient.get<PreviewChatIO[]>('chats');
  }
}