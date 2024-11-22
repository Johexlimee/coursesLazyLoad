import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeachersComponent } from './container/list-teachers/list-teachers.component';
import { LoginTeachersComponent } from './container/login-teachers/login-teachers.component';

const routes: Routes = [
  { path: '', 
    children: [
      { path: 'list-teachers', component:ListTeachersComponent },
      { path: 'login-teachers', component:LoginTeachersComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
