import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Funcionarios } from '../../../model/funcionarios';
import { FuncionariosService } from '../../../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatError
  ],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent {
  form = this.formBuilder.group({
    id: 0,
    nome: [''],
    rg: [''],
    foto: [''],
    departamentoId: 0
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: FuncionariosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const funcionario: Funcionarios = this.route.snapshot.data['funcionario'];

    this.form.setValue({
      id: funcionario.id,
      nome: funcionario.nome,
      rg: funcionario.rg,
      foto: funcionario.foto,
      departamentoId: funcionario.departamentoId
    })
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {

  }

}
