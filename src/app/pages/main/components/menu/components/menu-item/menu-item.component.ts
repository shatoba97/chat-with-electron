import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuItemIO } from '../../interface/menu-item.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input()
  public item!: MenuItemIO;

  constructor() { }


  ngOnInit(): void {
  }

  public clickEvent(): void {
    this.item.clickEvent();
  }

}
