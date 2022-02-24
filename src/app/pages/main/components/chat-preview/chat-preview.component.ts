import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss']
})
export class ChatPreviewComponent implements OnInit {

  @Input()
  public chat = null;
  constructor() { }

  ngOnInit(): void {
  }

}
