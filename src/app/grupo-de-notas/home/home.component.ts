import { Router } from '@angular/router';
import { GrupoNotas } from './../../shared/models/grupo-notas.model';
import { GrupoDeNotasService } from './../../shared/service/grupo-de-notas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private grupoDeNotasService: GrupoDeNotasService) { }

  gruposDeNotas: GrupoNotas[] = [];

  ngOnInit(): void {
    this.grupoDeNotasService.getAll().subscribe(data => {
      this.gruposDeNotas = data;
    });
  }

  excluir(id: number) {
    this.grupoDeNotasService.delete(id).subscribe(data => console.log(data));
    this.refresh();
  }

  editar(id: number) {
    this.goEditar(id);
  }

  goEditar(id: number){
    this.router.navigate(['/grupo-de-notas/cadastrar', id]);
  }

  refresh() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/grupo-de-notas']);
    });
  }
}
