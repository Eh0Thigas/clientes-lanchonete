import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Bebidas } from '../class/bebidas';
import { Doces } from '../class/doces';
import { Pedido } from '../class/pedido';
import { Salgados } from '../class/salgados';
import { BebidaService } from '../service/bebida.service';
import { DoceService } from '../service/doce.service';
import { PedidoService } from '../service/pedido.service';
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
  pedido: Pedido

  constructor(private bebidaService:BebidaService, private doceService:DoceService, private salgadoService:SalgadoService, private pedidoService:PedidoService,private router:Router) { }

  ngOnInit(): void {
    this.getBebidas();
    this.getDoces();
    this.getSalgados();
    this.pedido = new Pedido
    this.pedido.bebida = new Array
    this.pedido.doce = new Array
    this.pedido.salgado = new Array
    this.pedido.valorTotal = 0.00
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

  comprarBebida(bebida:String, valor:number){
    if(document.getElementById("carrinho").style.display = "none"){
      document.getElementById("carrinho").style.display = "flex"
    }
    if(document.getElementById("bebidas").style.display="none"){
      document.getElementById("bebidas").style.display="block"
    }
    this.pedido.bebida.push(bebida)
    this.pedido.valorTotal += valor
  }

  removerBebida(bebida:String){
    this.pedido.bebida.splice(this.pedido.bebida.indexOf(bebida), 1);
    for (const bebidas of this.bebidas) {
        if(bebidas.nomeBebida == bebida){
          this.pedido.valorTotal -= bebidas.valor
        }
    }
    if(this.pedido.bebida.length == 0){
      document.getElementById("bebidas").style.display="none"
    }
  }

  comprarSalgado(salgado:String, valor:number){
    if(document.getElementById("carrinho").style.display = "none"){
      document.getElementById("carrinho").style.display = "flex"
    }
    if(document.getElementById("salgados").style.display="none"){
      document.getElementById("salgados").style.display="block"
    }
    this.pedido.salgado.push(salgado)
    this.pedido.valorTotal += valor
  }

  removerSalgado(salgado:String){
    this.pedido.salgado.splice(this.pedido.salgado.indexOf(salgado), 1);
    for (const salgados of this.salgados) {
        if(salgados.nomeSalgado == salgado){
          this.pedido.valorTotal -= salgados.valor
        }
    }
    if(this.pedido.salgado.length == 0){
      document.getElementById("salgados").style.display="none"
    }
  }

  comprarDoce(doce:String, valor:number){
    if(document.getElementById("carrinho").style.display = "none"){
      document.getElementById("carrinho").style.display = "flex"
    }
    if(document.getElementById("doces").style.display="none"){
      document.getElementById("doces").style.display="block"
    }
    this.pedido.doce.push(doce)
    this.pedido.valorTotal += valor
  }

  removerDoce(doce:String){
    this.pedido.doce.splice(this.pedido.doce.indexOf(doce), 1);
    for (const doces of this.doces) {
        if(doces.nomeDoce == doce){
          this.pedido.valorTotal -= doces.valor
        }
    }
    if(this.pedido.doce.length == 0){
      document.getElementById("doces").style.display="none"
    }
  }

  finalizarPedido(){
    document.getElementById("finalizar").style.display = "none";
    document.getElementById("final").style.display = "flex";
    setTimeout(() => this.router.navigate(["/home"]), 5000);
  }

  nomeCliente(){
    document.getElementById("finalizar-section").style.display = "block";
    document.getElementById("carrinho").style.display = "none";
  }

  onSubmit(){
      this.pedidoService.criar(this.pedido).subscribe(data =>{this.finalizarPedido();}, error =>{
      console.log(error)
      } )
      
    }


  cancelarPedido(){
    this.router.navigate(["/home"]);
  }
  }

