import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './components/menu/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainPageRoutingModule { }

