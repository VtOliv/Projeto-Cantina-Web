import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private api: ApiService,
    private snack: MatSnackBar
  ) {}

  cpf: any
  senha: any
  nomeUsuario: string = 'Admin'

  ngOnInit() {}

  abrirCriar() {
    console.log(this.cpf);
    console.log(this.senha);
  }

  abrirPass() {

  }

  abrirHome() {
    this.router.navigate(['/home']);
  }

  logar() {
    if(this.cpf == '12345678911' && this.senha == '12345') {
      localStorage.setItem("Nome", this.nomeUsuario)
      setTimeout( () => this.router.navigate(['/home']) , 3000)

    } else {
      this.snack.open("Login ou senha inválidos", "Fechar" )
    }


    // this.api.logar(this.cpf, this.senha).subscribe(
    //   data => {
    //     if(data.loginValido === false){
    //       this.snack.open("Login ou senha inválidos", "Fechar" )
    //     } else {
    //       localStorage.setItem("Nome", data.nomeUsuario)

    //       setTimeout( () => this.router.navigate(['/home']) , 3000)
    //     }
    //   }
    // )


  }

  trocarSenha() {

  }

  buscarConta() {

  }

  criarConta() {

  }

}
