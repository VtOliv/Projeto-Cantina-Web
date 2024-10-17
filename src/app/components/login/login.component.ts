import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  value: any;
  numConta: any;
  back: any;
  criar = false;
  passDialog = false
  tipo: any;
  dono: any;
  pass: any;

  senhaAntiga: any;
  senhaNova: any;
  stateOptions: any[] = [
    { label: 'Conta Corrente', value: 2 },
    { label: 'Conta Poupança', value: 1 },
  ];

  ngOnInit() {}

  abrirCriar() {
    this.criar = true;
  }

  abrirPass() {
    this.passDialog = true;
  }

  abrirHome() {
    this.router.navigate(['/home']);
  }

  logar() {
    this.router.navigate(['/home']);
  }

  trocarSenha() {

  }

  buscarConta() {

  }

  criarConta() {

  }

}
