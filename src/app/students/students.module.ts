import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { LoginStudentsComponent } from './container/login-students/login-students.component';
import { RegisterStudentsComponent } from './container/register-students/register-students.component';


@NgModule({
  declarations: [
    LoginStudentsComponent,
    RegisterStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
