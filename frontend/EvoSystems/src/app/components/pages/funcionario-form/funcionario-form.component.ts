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
import { DepartamentosService } from '../../../services/departamentos.service';
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
    departamentoId: this.departamentosService.departmentId
  });

  departamentoId: number = this.departamentosService.departmentId;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: FuncionariosService,
    private departamentosService: DepartamentosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const funcionario: Funcionarios = this.route.snapshot.data['funcionario'];

    if (funcionario) {
      this.form.setValue({
        id: funcionario.id,
        nome: funcionario.nome,
        rg: funcionario.rg,
        foto: funcionario.foto,
        departamentoId: funcionario.departamentoId
      })
    }
  }

  onCancel() {
    this.location.back();
    console.log(this.departamentoId);
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  private onSuccess() {
    this.snackBar.open('Funcionario salvo com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar funcionário.', '', { duration: 5000 });
  }

}
