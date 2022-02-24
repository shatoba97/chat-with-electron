import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login-page.module').then(m => m.LoginPageModuleModule)
  },
  {
    path: 'chat',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/main/main-page.module').then(m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
