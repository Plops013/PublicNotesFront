import { GrupoNotas } from './../../shared/models/grupo-notas.model';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { GrupoDeNotasService } from './../../shared/service/grupo-de-notas.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private grupoDeNotasService: GrupoDeNotasService) { }

  grupoNotas = new GrupoNotas();

  ngOnInit(){
    let id: number;
    if (this.route.snapshot.paramMap.has('id')){
      id  = + this.route.snapshot.paramMap.get('id');
      if (id !== 0){
        this.grupoDeNotasService.getById(id).subscribe( data => {
          this.grupoNotas = data;
          console.log(this.grupoNotas);
        });
      }
    } else {
      this.grupoNotas.id = 0;
    }
  }

  onSubmit() {
    this.save();
    this.goToList();
  }

  save() {
    this.grupoDeNotasService.createGrupo(this.grupoNotas).subscribe(data => {
      this.grupoNotas = data;
    });
  }

  goToList() {
    this.router.navigate(['/grupo-de-notas/']);
  }

}
