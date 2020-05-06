import { Usuario } from './../../shared/models/usuario';
import { UsuarioService } from './../../shared/service/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: []
})
export class CadastroComponent implements OnInit {

  usuario = new Usuario();
  mensagemSucesso: string;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.save();
    this.gotoList();
  }

  save() {
    this.usuario.id = 0;
    this.usuarioService.save(this.usuario).subscribe(data => {
    console.log(data);
   });
    this.mensagemSucesso = 'Cadastrado Com Sucesso';
  }

  gotoList() {
    this.router.navigate(['/usuario/'], { queryParams: { mensagemSucesso: this.mensagemSucesso } });
  }
}
