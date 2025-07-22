import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  baseUrl = 'https://projeto-cantina-service.onrender.com/api/'

  // Endpoints Produtos

  carregarProdutos(page: Number){
    let url = this.http.get<any>(
      `${this.baseUrl}produtos?page=${page}`
    );
    return url.pipe(map((data) => data));
  }

    carregarProdutosTable(page: Number, pagesize: Number, sort: String){
    let url = this.http.get<any>(
      `${this.baseUrl}produtos/search?nomeProduto=${sort}&page=${page}&pageSize=${pagesize}`
    );
    return url.pipe(map((data) => data));
  }

  buscarProdutos(field: String, value: any) {
    let url = this.http.get<any>(
      `${this.baseUrl}produtos/search?${field}=${value}`
    );
    return url.pipe(map((data) => data));
  }

  // Endpoints Users
  logar(cpf: String, senha: String){

    var form = {
      cpfUsuario: cpf,
      senhaUsuario: senha
    }

    let url = this.http.post<any>(
      `${this.baseUrl}usuarios/login` , form
    );
    return url.pipe(map((data) => data));
  }

    carregarCategorias(){
    let url = this.http.get<any>(
      `${this.baseUrl}categorias`
    );
    return url.pipe(map((data) => data));
  }
}
