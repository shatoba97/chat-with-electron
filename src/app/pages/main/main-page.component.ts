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
  constructor() { }

  ngOnInit(): void {
  }

  public menuClick(): void {
    this.sidenav.open()
  }
}
