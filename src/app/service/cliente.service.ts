import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../class/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = "https://lanchonete-funtec-api.herokuapp.com/clientes";
  constructor(private http:HttpClient) { }

  criar(Clientes : Clientes): Observable<Object>{
    return this.http.post(`${this.clienteURL}`, Clientes);
  }
}
