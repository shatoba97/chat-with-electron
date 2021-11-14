import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { MaterialModule } from './material.module';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
    MatStepperModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
    MatStepperModule,
  ],
  providers: [FormBuilderTypeSafe],
})
export class SharedModule { }
