import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from '@core/service/chat.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CreateChatDialogComponent } from './components/create-chat-dialog/create-chat-dialog.component';
import { MenuItemIO } from './interface/menu-item.interface';

@UntilDestroy()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menuItems: MenuItemIO[] = [
    this.createChatItem(),
  ]

  constructor(
    private dialog: MatDialog,
    private chatService: ChatService
  ) { }

  private createChatItem(): MenuItemIO {
    return {
      label: 'Create chat',
      clickEvent: () => {
        const dialogOpend = this.dialog.open(CreateChatDialogComponent);
        dialogOpend.afterClosed().pipe(mergeMap((name) => this.createChat(name)), untilDestroyed(this)).subscribe()
      }
    };
  }

  private createChat(name: string): Observable<void> {
    return this.chatService.createChat(name);
  }

}
