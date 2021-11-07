import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';



@NgModule({
  declarations: [
    ChatComponent,
    ChatPreviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
