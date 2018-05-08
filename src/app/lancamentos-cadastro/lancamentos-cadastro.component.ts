import { Component, OnInit } from '@angular/core';
import { LancamentoModel } from '../models/lancamentoModel';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css']
})
export class LancamentosCadastroComponent implements OnInit {
  lancamento = new LancamentoModel();

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

  tipos = [
    {label: "RECEITA", value: "RECEITA"},
    {label: "DESPESA", value: "DESPESA"}
  ];

  categorias = [
    {label: "Alimentação", value: 1},
    {label: "Transporte", value: 2}
  ];

  pessoas = [
    {label: "Marcos José", value: 1},
    {label: "Ferreira da Silva", value: 2},
    {label: "Severino Cardoso", value: 3}
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
