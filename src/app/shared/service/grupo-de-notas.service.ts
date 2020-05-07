import { GrupoNotas } from './../models/grupo-notas.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrupoDeNotasService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/grupo';
   }

   public getAll(): Observable<GrupoNotas[]>{
     return this.http.get<GrupoNotas[]>(this.apiUrl);
   }

   public delete(id: number): Observable<GrupoNotas>{
      console.log(this.apiUrl + '/' + id);
      return this.http.delete<GrupoNotas>(this.apiUrl + '/' + id);
   }

   public createGrupo(grupoDeNotas: GrupoNotas): Observable<GrupoNotas>{
     return this.http.post<GrupoNotas>(this.apiUrl, grupoDeNotas);
   }

}
