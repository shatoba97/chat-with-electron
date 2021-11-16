import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { typedFormArray, typedFormControl, typedFormGroup, TypedFormGroup } from 'ngx-forms-typed';
import { AuthService } from 'src/app/core/service/auth.service';
import { RegisterUserFormIO } from 'src/app/pages/login/register/modal/register-user.model';
import { SystemDataFormIO } from './modal/system-data-form.modal';
import { UserDataFormIO } from './modal/user-data-form.modal';

@UntilDestroy()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerFormData!: RegisterUserFormIO;
  public systemDataForm: TypedFormGroup<SystemDataFormIO>;
  public userDataForm: TypedFormGroup<UserDataFormIO>;

  constructor(
    private authService: AuthService,
  ) {
    this.systemDataForm = typedFormGroup({
      login: typedFormControl('', Validators.required),
      nickName: typedFormControl('', Validators.required),
      password: typedFormControl('', Validators.required),
      icon: typedFormControl(null),
    }) as TypedFormGroup<SystemDataFormIO>;
    this.userDataForm = typedFormGroup({
      firstName: typedFormControl('', Validators.required),
      lastName: typedFormControl('', Validators.required),
    }) as TypedFormGroup<UserDataFormIO>
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if (!this.systemDataForm.valid || !this.userDataForm.valid) {
      return;
    }
    this.registerFormData = Object.assign(this.systemDataForm.value, this.userDataForm.value)
    this.authService.registerUser(this.registerFormData).pipe(
      untilDestroyed(this)
    )
      .subscribe();
  }
}
