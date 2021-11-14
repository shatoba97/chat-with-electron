import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatInputModule
  ],
  providers: [FormBuilderTypeSafe],
})
export class SharedModule { }
