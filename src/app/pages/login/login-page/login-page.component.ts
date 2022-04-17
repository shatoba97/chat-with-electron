import { Component, OnInit } from '@angular/core';
import { FormBuilderTypeSafe, FormGroupTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AuthService } from '@core/service/auth.service';
import { LocalStorageService } from '@core/service/local-store.service';
import { LoginCredIO } from './model/login-creds.model';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroupTypeSafe<LoginCredIO>;

  constructor(
    private fb: FormBuilderTypeSafe,
    private authService: AuthService,
    private localStoreService: LocalStorageService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group<LoginCredIO>({
      login: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    });
    this.localStoreService.token$.next('');
  }

  public submitLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const form = this.loginForm.value;
    this.authService.auth(form).pipe(
      take(1),
      untilDestroyed(this),
    ).subscribe(() => {
      this.router.navigate(['chat']);
    })
  }

  /** */
  public ngOnInit(): void {

  }

}
