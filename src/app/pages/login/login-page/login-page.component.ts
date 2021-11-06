import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilderTypeSafe, FormGroupTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { AuthService } from 'src/app/core/service/auth.service';
import { LoginCredIO } from './model/login-creds.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroupTypeSafe<LoginCredIO>;

  constructor(
    private fb: FormBuilderTypeSafe,
    private authService: AuthService
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
    this.authService.auth(form).subscribe(res => console.log(res))
  }

  /** */
  public ngOnInit(): void {

  }

}
