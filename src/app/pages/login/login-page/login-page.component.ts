import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilderTypeSafe, FormGroupTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/service/auth.service';
import { LoginCredIO } from './model/login-creds.model';

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
    private router: Router,
  ) {
    this.loginForm = this.fb.group<LoginCredIO>({
      login: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  public submitLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const form = this.loginForm.value;
    this.authService.auth(form).pipe(
      take(1),
      untilDestroyed(this),
    ).subscribe(res => {
      this.router.navigate(['chat']);
    })
  }

  /** */
  public ngOnInit(): void {

  }

}
