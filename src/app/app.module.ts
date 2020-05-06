import { HttpClient } from '@angular/common/http';
import { UsuarioModule } from './usuario/usuario.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LogoComponent } from './core/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UsuarioModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
