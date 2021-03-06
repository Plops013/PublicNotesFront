import { NotaModule } from './nota/nota.module';
import { HomeComponent } from './home/home.component';
import { GrupoDeNotasModule } from './grupo-de-notas/grupo-de-notas.module';
import { HttpClient } from '@angular/common/http';
import { UsuarioModule } from './usuario/usuario.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LogoComponent } from './core/logo/logo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    HomeComponent,
    PageNotFoundComponent,
    ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    GrupoDeNotasModule,
    NotaModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
