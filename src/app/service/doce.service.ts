import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doces } from '../class/doces';

@Injectable({
  providedIn: 'root'
})
export class DoceService {

  docesURl = "";

  constructor(private http:HttpClient) { }
  listar(): Observable<Doces[]>{
    return this.http.get<Doces[]>(`${this.docesURl}`);
  }
}
