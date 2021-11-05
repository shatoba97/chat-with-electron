import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';


const components = [
  LoginPageComponent,
];

@NgModule({
  declarations: components,
  imports: [
    LoginPageRoutingModule,
    SharedModule,
  ],
  exports: components,
  providers: [],
})
export class LoginPageModuleModule { }
