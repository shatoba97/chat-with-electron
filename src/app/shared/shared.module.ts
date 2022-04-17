import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

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
    ScrollingModule,
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
    ScrollingModule,
  ],
  providers: [FormBuilderTypeSafe],
})
export class SharedModule { }
