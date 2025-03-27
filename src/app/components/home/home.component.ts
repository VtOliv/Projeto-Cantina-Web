import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor(private api: ApiService) { }

  hide = true;
  produtos: any = [
    {
      "nomeProduto": "Hambúrguer Clássico",
      "descricaoProduto": "Hambúrguer com carne, queijo e molho especial",
      "idCategoria": 1,
      "precoVenda": 15.90
    },
    {
      "nomeProduto": "Cheeseburger",
      "descricaoProduto": "Hambúrguer com carne, queijo cheddar e molho barbecue",
      "idCategoria": 1,
      "precoVenda": 17.50
    },
    {
      "nomeProduto": "Batata Frita",
      "descricaoProduto": "Batatas fritas crocantes",
      "idCategoria": 2,
      "precoVenda": 8.90
    },
    {
      "nomeProduto": "Milkshake de Morango",
      "descricaoProduto": "Milkshake cremoso de morango",
      "idCategoria": 3,
      "precoVenda": 12.50
    },
    {
      "nomeProduto": "Cachorro Quente",
      "descricaoProduto": "Salsicha no pão com molho de mostarda e ketchup",
      "idCategoria": 1,
      "precoVenda": 10.00
    },
    {
      "nomeProduto": "X-Burguer",
      "descricaoProduto": "Hambúrguer com queijo, alface, tomate e maionese",
      "idCategoria": 1,
      "precoVenda": 18.00
    },
    {
      "nomeProduto": "Pizza de Calabresa",
      "descricaoProduto": "Pizza com calabresa, cebola e azeitonas",
      "idCategoria": 4,
      "precoVenda": 25.00
    },
    {
      "nomeProduto": "Suco Natural de Laranja",
      "descricaoProduto": "Suco fresco de laranja",
      "idCategoria": 3,
      "precoVenda": 6.50
    },
    {
      "nomeProduto": "Torrada com Queijo",
      "descricaoProduto": "Torrada crocante com queijo derretido",
      "idCategoria": 2,
      "precoVenda": 7.90
    },
    {
      "nomeProduto": "Hambúrguer Vegano",
      "descricaoProduto": "Hambúrguer vegetal com alface e tomate",
      "idCategoria": 1,
      "precoVenda": 20.00
    }
  ];

  filter: any
  field: any
  carrinho: any = []
  total: Number = 0.00

  ngOnInit(): void {
    // this.api.carregarProdutos(0).subscribe(
    //   data => {
    //     this.produtos = data.content
    //     // this.carrinho = data.content
    //     console.log(data.content);     
    //   }
    // )
  }

  ngOnChanges(): void {
    var result = this.carrinho.map((i: { precoVenda: any; }) => i.precoVenda)
    console.log(result);
    
  }

  buscarProdutos(){
    var listaOriginal = this.produtos

    if(this.filter == ""){
      this.produtos = listaOriginal
    } else {
      this.produtos = this.produtos.filter((produto: { nomeProduto: string; }) =>
        produto.nomeProduto.toLowerCase().includes(this.filter.toLowerCase())
      );

      if(this.produtos.length == 0){
        this.produtos = listaOriginal
      }
    }

    // this.api.buscarProdutos('nomeProduto', this.filter).subscribe(
    //   data => {
    //     this.produtos = data.content
    //     console.log(this.filter);
        
    //     console.log(data.content);     
    //   }
    // )
  }

  atualizaTotal(){
    var result = this.carrinho.map((i: { precoVenda: any; }) => i.precoVenda)
    this.total = result.reduce((accumulator: any,value: any) => accumulator + value,0);
  }

  add(item: any) {
    this.carrinho.push(item)
    this.total = item.precoVenda
   
   this.atualizaTotal() 
  }

  remove(item: any): void {
    const index = this.carrinho.indexOf(item);

    if (index >= 0) {
      this.carrinho.splice(index, 1);
    }

    this.atualizaTotal()
  }
}
