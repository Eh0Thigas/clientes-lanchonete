import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebidas } from '../class/bebidas';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  bebidasURL = "";

  constructor(private http:HttpClient) { }

  listar(): Observable<Bebidas[]>{
    return this.http.get<Bebidas[]>(`${this.bebidasURL}`);
  }
}
