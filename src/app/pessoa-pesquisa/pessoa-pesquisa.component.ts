import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  entradaTexto: string="";
  pessoas = [
    {nome: "seu chico", cidade: "Fortaleza", uf:"CE", status:true},
    {nome: "seu chico", cidade: "Fortaleza", uf:"CE", status:false},
    {nome: "seu chico", cidade: "Fortaleza", uf:"DF", status:true},
    {nome: "seu chico", cidade: "Fortaleza", uf:"CE", status:true},
    {nome: "seu chico", cidade: "Fortaleza", uf:"MG", status:false},
    {nome: "seu chico", cidade: "Fortaleza", uf:"CE", status:true},
    {nome: "seu chico", cidade: "Fortaleza", uf:"CE", status:false},
    {nome: "seu chico", cidade: "Fortaleza", uf:"DF", status:true},
    {nome: "seu chico", cidade: "Fortaleza", uf:"CE", status:true},
    {nome: "seu chico", cidade: "Fortaleza", uf:"MG", status:false}
  ];
  constructor() { }

  ngOnInit() {
  }
  pesquisar(value){
    console.log(value);
  }

}
