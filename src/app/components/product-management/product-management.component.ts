import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
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
export class ProductManagementComponent implements OnInit, AfterViewInit {
  colunasExibidas: string[] = ['nomeProduto', 'descricaoProduto', 'idCategoria', 'precoVenda', 'acoes'];
  produtos: Produto[] = [];
  totalItens = 0;
  itensPorPagina = 5;
  paginaAtual = 0;
  filtro = '';
  menuAberto = false

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      this.paginaAtual = 0;
      this.paginator.pageIndex = 0;
      this.carregarProdutos();
    });
  }

  carregarProdutos(): void {
    this.api.carregarProdutosTable(this.paginaAtual, this.itensPorPagina, this.filtro).subscribe((response: any) => {
      this.produtos = response.content;
      this.totalItens = response.totalElements;
    });
  }

  aoMudarPagina(event: PageEvent): void {
    this.itensPorPagina = event.pageSize;
    this.paginaAtual = event.pageIndex;
    this.carregarProdutos();
  }

  aplicarFiltro(event: Event): void {
    const valor = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filtro = valor;
    this.paginaAtual = 0;
    this.paginator.pageIndex = 0;
    this.carregarProdutos();
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((resultado: Produto | undefined) => {
      if (resultado) this.carregarProdutos();
    });
  }

  editarProduto(produto: Produto): void {
    alert(`Editar produto: ${produto.nomeProduto}`);
  }

  excluirProduto(produto: Produto): void {
    const confirmacao = confirm(`Deseja excluir o produto "${produto.nomeProduto}"?`);
    if (confirmacao) {
      alert("Apagado")
    }
  }
}
