import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

export interface Produto {
  nomeProduto: string;
  descricaoProduto: string;
  idCategoria: number;
  precoVenda: number;
}

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})

export class ProductManagementComponent implements OnInit {
  colunasExibidas: string[] = ['nomeProduto', 'descricaoProduto', 'idCategoria', 'precoVenda', 'acoes'];
  dataSource!: MatTableDataSource<Produto>;
  menuAberto = false;

  produtos: Produto[] = [
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.produtos);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  aplicarFiltro(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  abrirDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((resultado: Produto | undefined) => {
      if (resultado) {
        this.dataSource.data = [...this.dataSource.data, resultado];
      }
    });
  }

  editarProduto(produto: Produto) {
    alert(`Editar produto: ${produto.nomeProduto}`);
  }

  excluirProduto(produto: Produto) {
    const confirmacao = confirm(`Deseja excluir o produto "${produto.nomeProduto}"?`);
    if (confirmacao) {
      this.dataSource.data = this.dataSource.data.filter(p => p !== produto);
    }
  }
}