import { RepollService } from './../shared/service/repoll.service';
import { BrowserModule } from '@angular/platform-browser';
import { browser } from 'protractor';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PublicasComponent } from './publicas/publicas.component';



@NgModule({
  declarations: [HomeComponent, CadastrarComponent, PublicasComponent],
  imports: [
    CommonModule, FormsModule, BrowserModule
  ],
  providers: [
    RepollService
  ]
})
export class NotaModule { }
