import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAllTodosComponent} from './list-all-todos/list-all-todos.component';
import {ParentComponent} from './parent/parent.component';


const routes: Routes = [
  {path: '', component: ListAllTodosComponent},
  {path: 'output', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
