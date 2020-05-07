import { GrupoNotas } from './../../shared/models/grupo-notas.model';
import { Router } from '@angular/router';
import { GrupoDeNotasService } from './../../shared/service/grupo-de-notas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private router: Router, private grupoDeNotasService: GrupoDeNotasService) { }

  grupoNotas = new GrupoNotas();

  ngOnInit(): void {
  }

  onSubmit(){
    this.save();
    this.goToList();
  }

  save(){
    this.grupoDeNotasService.createGrupo(this.grupoNotas).subscribe(data => {
      this.grupoNotas = data;
    });
  }

  goToList(){
    this.router.navigate(['/grupo-de-notas/']);
  }

}
