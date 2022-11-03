import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salgados } from '../class/salgados';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalgadoService {

  salgadosURL="https://lanchonete-funtec-api.herokuapp.com/salgados";

  constructor(private http:HttpClient) { }

  listar(): Observable<Salgados[]>{
    return this.http.get<Salgados[]>(`${this.salgadosURL}`);
  }

}
