import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  entradaTexto: string='';
  
  lancamentos = [
    {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},    {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "RECEITA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: "31/10/2012",
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "DESPESA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 4.95,pessoa: "Marcos Ferreira Severino"},
     {tipo: "RECEITA", descricao: "Compra de pão", dataVencimento: "30/06/2018", dataPagamento: null,
     valor: 100.95,pessoa: "Marcos Ferreira Severino"},
  ];

  pesquisar($value){
    if($value.length > 3){
      console.log($value, $value.length);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
