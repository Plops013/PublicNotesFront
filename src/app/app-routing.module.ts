import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './usuario/home/home.component';

const routes: Routes = [
  { path: 'usuario', component: HomeComponent },
  ...UsuarioRoutingModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
