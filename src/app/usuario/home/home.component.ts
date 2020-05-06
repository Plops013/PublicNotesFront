import { Usuario } from './../../shared/models/usuario';
import { UsuarioService } from './../../shared/service/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  mensagemSucesso: string;

  ngOnInit(): void {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.mensagemSucesso =  params['mensagemSucesso'];
    });
  }

  navigate(path) {
    this.router.navigate([{outlets: {primary: path, usuario: path}}]);
    }

  onSubmit(){
  }

}
