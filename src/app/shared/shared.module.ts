import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { MaterialModule } from './material.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

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
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
    MatStepperModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [FormBuilderTypeSafe],
})
export class SharedModule { }
