import { ErrorHandler, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptorService } from './core/service/base-interceptor.service';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { BaseErrorHandlerService } from '@core/service/base-error-handler.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '@core/service/local-store.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptorService, multi: true },
    { provide: 'LocalStorage', useValue: window.localStorage },
    {
      provide: ErrorHandler,
      useClass: BaseErrorHandlerService,
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
