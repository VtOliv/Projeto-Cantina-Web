import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  hide = true;
  produtos = [
    {nome: "Coxinha", preco: 7.50, categoria: "Salgados"},
    {nome: "Coca-cola", preco: 3.50, categoria: "Bebidas"},
    {nome: "Café", preco: 1.50, categoria: "Bebidas"},
    {nome: "Risóle", preco: 7.50, categoria: "Salgados"},
    {nome: "X-Burguer", preco: 12.50, categoria: "Lanches"}
  ]

  ngOnInit(): void {
  }

}
