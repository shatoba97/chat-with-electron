import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ChatComponent,
    ChatPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChatModule { }
