import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MainPageRoutingModule } from './main-page-roiting.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ChatPreviewComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainPageRoutingModule,
  ],
  exports: [
    MainPageComponent,
    ChatPreviewComponent,
    MenuComponent,
  ],
  bootstrap: [MainPageComponent]
})
export class MainPageModule { }
