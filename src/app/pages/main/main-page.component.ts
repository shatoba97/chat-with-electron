import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;

  public chatList$ = new BehaviorSubject([])
  public user$ = new BehaviorSubject(null);
  public dataPreview$ = new BehaviorSubject(null);
  public set searchValue(value: string) {
    this._searchValue = value;
  }

  public get searchValue(): string {
    return this._searchValue;
  }

  private _searchValue!: string;

  constructor() { }



  public ngOnInit(): void {
  }

  public clearSearchValue(): void {
    this.searchValue = '';
  }

  public menuClick(): void {
    this.sidenav.open()
  }
}
