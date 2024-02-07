import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Departamentos } from '../../../model/departamentos';
import { DepartamentosService } from '../../../services/departamentos.service';

@Component({
  selector: 'app-departamento-form',
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
  templateUrl: './departamento-form.component.html',
  styleUrl: './departamento-form.component.css',
})
export class DepartamentoFormComponent {
  form = this.formBuilder.group({
    id: 0,
    nome: [''],
    sigla: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: DepartamentosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const departamento: Departamentos =
      this.route.snapshot.data['departamento'];

    this.form.setValue({
      id: departamento.id,
      nome: departamento.nome,
      sigla: departamento.sigla,
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Departamento salvo com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar departamento.', '', { duration: 5000 });
  }
}
