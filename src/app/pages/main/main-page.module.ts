import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { DataPreviewComponent } from './components/data-preview/data-preview.component';
import { MainPageRoutingModule } from './main-page-roiting.module';
import { MenuItemComponent } from './components/menu/components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateChatDialogComponent } from './components/menu/components/create-chat-dialog/create-chat-dialog.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    MainPageComponent,
    DataPreviewComponent,
    MenuComponent,
    MenuItemComponent,
    CreateChatDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainPageRoutingModule,
  ],
  exports: [
    MainPageComponent,
    DataPreviewComponent,
    MenuComponent,
    MenuItemComponent,
    CreateChatDialogComponent
  ],
  bootstrap: [MainPageComponent]
})
export class MainPageModule { }
