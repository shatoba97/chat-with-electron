import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-chat-dialog',
  templateUrl: './create-chat-dialog.component.html',
  styleUrls: ['./create-chat-dialog.component.scss']
})
export class CreateChatDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateChatDialogComponent>) { }

  public chatName = '';
  public ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close(this.chatName);
  }
}
