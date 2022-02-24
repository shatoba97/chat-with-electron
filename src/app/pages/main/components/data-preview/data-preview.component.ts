import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

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
    console.log(value)
  };

  public get dataPreview() {
    return this._dataPreview;
  };

  private _dataPreview: PreviewChatIO[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
