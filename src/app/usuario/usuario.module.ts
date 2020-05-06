import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './../shared/service/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
