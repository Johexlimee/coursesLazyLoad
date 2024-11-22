import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginStudentsComponent } from './container/login-students/login-students.component';
import { RegisterStudentsComponent } from './container/register-students/register-students.component';

const routes: Routes = [
  { path: '', 
    children: [
      { path: 'login-students', component:LoginStudentsComponent },
      { path: 'register-students', component:RegisterStudentsComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
