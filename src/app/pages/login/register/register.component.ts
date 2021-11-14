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

  public registerForm!: TypedFormGroup<RegisterUserFormIO>;

  constructor(
    private authService: AuthService,
  ) { 
    this.registerForm = typedFormGroup({
      systemDataForm: typedFormGroup({
        email: typedFormControl('', Validators.required),
        nickName: typedFormControl('', Validators.required),
        password: typedFormControl('', Validators.required),
        icon: typedFormControl(null, Validators.required),
      }) as TypedFormGroup<SystemDataFormIO>,
      userDataForm: typedFormGroup({
        firstName: typedFormControl('', Validators.required),
        lastName: typedFormControl('', Validators.required),
      })as TypedFormGroup<UserDataFormIO>
    }) as TypedFormGroup<RegisterUserFormIO>;
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if(!this.registerForm.valid){
      return;
    }

    this.authService.registerUser(this.registerForm.value).pipe(
      untilDestroyed(this)
    )
    .subscribe();
  }
}
