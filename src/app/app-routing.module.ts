import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';

const routes: Routes = [
  { path: 'logout', component: MainLayoutsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
