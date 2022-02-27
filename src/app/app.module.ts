import { ErrorHandler, NgModule, NgZone } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { BaseErrorHandlerService } from '@core/service/base-error-handler.service';
import { BaseInterceptorService } from './core/service/base-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageService } from '@core/service/local-store.service';
import { NgxDragResizeModule } from 'ngx-drag-resize';
import { Router } from '@angular/router';

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
