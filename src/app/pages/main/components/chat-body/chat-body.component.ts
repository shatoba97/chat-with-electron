import { Component, Input, OnInit } from '@angular/core';

import { ChatIO } from '@core/model/chat.model';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {

  @Input()
  public messages: ChatIO[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
