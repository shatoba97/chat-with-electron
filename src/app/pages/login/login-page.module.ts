import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';


const components = [
  LoginPageComponent,
  RegisterComponent,
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
