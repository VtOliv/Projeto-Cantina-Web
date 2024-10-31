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
  produtos: any = [];
  filter: any
  field: any
  carrinho: any = []
  total: Number = 0.00

  ngOnInit(): void {
    this.api.carregarProdutos(0).subscribe(
      data => {
        this.produtos = data.content
        // this.carrinho = data.content
        console.log(data.content);     
      }
    )
  }

  ngOnChanges(): void {
    var result = this.carrinho.map((i: { precoVenda: any; }) => i.precoVenda)
    console.log(result);
    
  }

  buscarProdutos(){
    this.api.buscarProdutos('nomeProduto', this.filter).subscribe(
      data => {
        this.produtos = data.content
        console.log(this.filter);
        
        console.log(data.content);     
      }
    )
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
