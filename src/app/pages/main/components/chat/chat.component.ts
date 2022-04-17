import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { PreviewChatIO } from '@core/interface/preview-chat.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input()
  public set chatData(val: PreviewChatIO | null) {
    this.chatData$.next(val);
  } 

  public chatData$ = new BehaviorSubject<PreviewChatIO | null>(null);
  constructor() { }

  ngOnInit(): void {
    this.chatData$.pipe(
      // switchMap(chat => this.)
    )
  }

}
