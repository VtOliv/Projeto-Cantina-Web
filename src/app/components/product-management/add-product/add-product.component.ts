import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../product-management.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProductComponent>
  ) {
    this.form = this.fb.group({
      nomeProduto: ['', Validators.required],
      descricaoProduto: ['', Validators.required],
      idCategoria: [1, Validators.required],
      precoVenda: [0, [Validators.required, Validators.min(0)]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fechar() {
    this.dialogRef.close();
  }

  salvar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value as Produto);
    }
  }
}