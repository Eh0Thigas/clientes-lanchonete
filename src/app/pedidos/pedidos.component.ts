import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bebidas } from '../class/bebidas';
import { Doces } from '../class/doces';
import { Salgados } from '../class/salgados';
import { BebidaService } from '../service/bebida.service';
import { DoceService } from '../service/doce.service';
import { SalgadoService } from '../service/salgado.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  bebidas: Bebidas[];
  doces: Doces[];
  salgados: Salgados[];

  constructor(private bebidaService:BebidaService, private doceService:DoceService, private salgadoService:SalgadoService, private router:Router) { }

  ngOnInit(): void {
    this.getBebidas();
    this.getDoces();
    this.getSalgados();
  }

  private getBebidas(){
    this.bebidaService.listar().subscribe(data =>{this.bebidas=data})
  }

  private getDoces(){
    this.doceService.listar().subscribe(data =>{this.doces=data})
  }

  private getSalgados(){
    this.salgadoService.listar().subscribe(data=>{this.salgados=data})
  }

  refresh(): void{
    window.location.reload();
  }
}
