import { Component, OnInit } from '@angular/core';
import { LancamentoModel } from '../models/lancamentoModel';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  entradaTexto: string='';
  lancamento = new LancamentoModel();
  
  lancamentos = [
    {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "RECEITA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: new Date(2018,8,28),
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "RECEITA", descricao: "Compra de pão", dataVencimento: new Date(2018,6,30), dataPagamento: new Date(2018,8,28),
     valor: 100.95,pessoa: "Marcos Ferreira Severino"},
  ];

  pesquisar($value){
    
      //console.log($value.value);
      console.log("Lançamentos ", this.lancamento);

    
  }
  constructor() { }

  ngOnInit() {
  }

}
