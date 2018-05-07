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

  pt_br = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qua', 'Qui', 'Sex', 'Sa'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };
  
  pesquisar($value){
    
      //console.log($value.value);
      console.log("Lançamentos ", this.lancamento);

    
  }
  constructor() { }

  ngOnInit() {
  }

}
