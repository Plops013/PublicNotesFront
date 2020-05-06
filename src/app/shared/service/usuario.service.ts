import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario';

@Injectable()
export class UsuarioService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/usuario/';
  }

  public save(usuario: Usuario): Observable<Usuario>{
    console.log('Usuario no controller:' + usuario.email);
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  public getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  }

}
