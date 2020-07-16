import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'view', component: ViewComponent},
  {path: 'add', component: AddComponent},
  {path: '', redirectTo: 'view', pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
