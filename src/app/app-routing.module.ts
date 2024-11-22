import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesModule } from './list-courses/list-courses.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

const routes: Routes = [
  { path: 'courses', loadChildren: ()=> import('./list-courses/list-courses.module').then((m)=>ListCoursesModule) },
  { path: 'students', loadChildren: ()=> import('./students/students.module').then((m)=>StudentsModule) },
  { path: 'teachers', loadChildren: ()=> import('./teachers/teachers.module').then((m)=>TeachersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
