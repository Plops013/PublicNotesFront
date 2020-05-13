import { RepollService } from './../../shared/service/repoll.service';
import { Nota } from './../../shared/models/nota.model';
import { NotaService } from './../../shared/service/nota.service';
import { GrupoNotas } from './../../shared/models/grupo-notas.model';
import { GrupoDeNotasService } from './../../shared/service/grupo-de-notas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private notaService: NotaService, private repollService: RepollService) { }

  todasNotas: Nota[];
  nota = new Nota();



  ngOnInit(): void {
    this.fetchTodos();
    this.repollService.obs.subscribe(() => this.fetchTodos());
  }

  fetchTodos(){
    this.notaService.getAll().subscribe(data => {
      this.todasNotas = data;
    });
    this.nota = new Nota();
  }

  onSubmit(){
    this.notaService.save(this.nota).subscribe( data => {
      this.nota = data;
      this.repollService.notify(null);
    });
  }
}
