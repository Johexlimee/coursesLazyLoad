import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { LoginTeachersComponent } from './container/login-teachers/login-teachers.component';
import { ListTeachersComponent } from './container/list-teachers/list-teachers.component';


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
