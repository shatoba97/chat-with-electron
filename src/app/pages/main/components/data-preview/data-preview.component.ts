import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.scss']
})
export class DataPreviewComponent implements OnInit {

  @Input()
  public dataPreview = null;
  constructor() { }

  ngOnInit(): void {
  }

}
