import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { typedFormControl, typedFormGroup, TypedFormGroup } from 'ngx-forms-typed';
import { RegisterUserIO } from 'src/app/core/model/register-user.model';
import { AuthService } from 'src/app/core/service/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: TypedFormGroup<RegisterUserIO>;

  constructor(
    private authService: AuthService,
  ) { 
    this.registerForm = typedFormGroup({
      firstName: typedFormControl('', Validators.required),
      lastName: typedFormControl('', Validators.required),
      icon: typedFormControl(null, Validators.required),
      nickName: typedFormControl('', Validators.required),
      email: typedFormControl('', Validators.required),
      password: typedFormControl('', Validators.required),
    })
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
