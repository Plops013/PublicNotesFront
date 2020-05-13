import { NotaRoutingModule } from './nota/nota-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GrupoDeNotasRoutingModule } from './grupo-de-notas/grupo-de-notas-routing.module';
import { HomeComponent } from './home/home.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  ...UsuarioRoutingModule,
  ...GrupoDeNotasRoutingModule,
  ...NotaRoutingModule,
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
