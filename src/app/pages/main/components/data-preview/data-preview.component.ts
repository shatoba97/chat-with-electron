import { Component, Input, OnInit } from '@angular/core';
import { PreviewChatIO } from '@core/model/preview-chat.model';

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.scss']
})
export class DataPreviewComponent implements OnInit {

  @Input()
  public dataPreview: PreviewChatIO[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
