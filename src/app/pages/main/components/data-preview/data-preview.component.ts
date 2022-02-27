import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { NgxResizeHandleType } from 'ngx-drag-resize';
import { PreviewChatIO } from '@core/model/preview-chat.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataPreviewComponent implements OnInit {
  @Input()
  public dataPreview: PreviewChatIO[] | null = [];

  public resizeFront = NgxResizeHandleType.Right;

  @Output()
  public onSelectChat$: EventEmitter<PreviewChatIO> = new EventEmitter();

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {}
  
  public getImage(chatPreview: PreviewChatIO): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/jpg;base64,' +
      (chatPreview.icon || '')
    );
  }

  public selectChat(chat: PreviewChatIO): void {
    this.onSelectChat$.emit(chat);
  }
}
