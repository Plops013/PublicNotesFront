import { FormsModule } from '@angular/forms';
import { GrupoDeNotasService } from './../shared/service/grupo-de-notas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



@NgModule({
  declarations: [HomeComponent, CadastrarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    GrupoDeNotasService
  ]
})
export class GrupoDeNotasModule { }
