import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



@NgModule({
  declarations: [HomeComponent, CadastrarComponent],
  imports: [
    CommonModule
  ]
})
export class GrupoDeNotasModule { }
