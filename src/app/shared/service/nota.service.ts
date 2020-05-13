import { Nota } from './../models/nota.model';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/nota';
  }

  public getAll(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.apiUrl);
  }

  public save(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.apiUrl, nota);
  }

}
