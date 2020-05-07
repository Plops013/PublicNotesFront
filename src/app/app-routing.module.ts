import { GrupoDeNotasRoutingModule } from './grupo-de-notas/grupo-de-notas-routing.module';
import { HomeComponent } from './home/home.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  ...UsuarioRoutingModule,
  ...GrupoDeNotasRoutingModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
