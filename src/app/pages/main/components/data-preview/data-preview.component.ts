import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Sanitizer,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PreviewChatIO } from '@core/model/preview-chat.model';

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataPreviewComponent implements OnInit {
  @Input()
  public set dataPreview(value: PreviewChatIO[] | null) {
    this._dataPreview = value;
    console.log(value);
  }

  public get dataPreview() {
    return this._dataPreview;
  }

  private _dataPreview: PreviewChatIO[] | null = [];

  constructor(private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {}
  public getImage(chatPreview: PreviewChatIO): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/jpg;base64,' +
      (chatPreview.icon || '')
    );
  }
}
