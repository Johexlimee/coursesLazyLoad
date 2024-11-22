import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { LoginTeachersComponent } from './containes/login-teachers/login-teachers.component';
import { ListTeachersComponent } from './containes/list-teachers/list-teachers.component';


@NgModule({
  declarations: [
    LoginTeachersComponent,
    ListTeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
