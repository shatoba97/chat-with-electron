import { BehaviorSubject, Observable, interval, of } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { catchError, concatMap, startWith } from 'rxjs/operators';

import { ChatIO } from '@core/model/chat.model';
import { ChatService } from '@core/service/chat.service';
import { MatSidenav } from '@angular/material/sidenav';
import { PreviewChatIO } from '@core/model/preview-chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;
  public selectedChat$ = new BehaviorSubject<ChatIO[]>([])

  public showChat$ = new BehaviorSubject<PreviewChatIO | null>(null);
  public chatList$ = new BehaviorSubject([])
  public user$ = new BehaviorSubject(null);
  public set searchValue(value: string) {
    this._searchValue = value;
  }

  public get searchValue(): string {
    return this._searchValue;
  }

  public dataPreview$: Observable<PreviewChatIO[]> = interval(5000).pipe(
    concatMap(() => this.chatService.getAllPreviewChats()),
    catchError(error => {
      console.log(error);
      return of([]);
    }),
    startWith([])
  );

  private _searchValue!: string;

  constructor(
    private chatService: ChatService,
  ) { }


  public clearSearchValue(): void {
    this.searchValue = '';
  }

  public menuClick(): void {
    this.sidenav.open()
  }

  public showChat(chat: PreviewChatIO): void {
    this.showChat$.next(chat)
  }


}
