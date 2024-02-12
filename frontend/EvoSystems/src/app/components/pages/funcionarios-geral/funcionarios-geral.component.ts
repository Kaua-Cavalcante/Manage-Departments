import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Observable, catchError, of } from 'rxjs';
import { Funcionarios } from '../../../model/funcionarios';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { FuncionariosGeralListaComponent } from '../../funcionarios-geral-lista/funcionarios-geral-lista.component';
import { FuncionariosListaComponent } from '../../funcionarios-lista/funcionarios-lista.component';

@Component({
  selector: 'app-funcionarios-geral',
  standalone: true,
  imports: [
    MatCardModule,
    FuncionariosListaComponent,
    MatProgressSpinner,
    CommonModule,
    FuncionariosGeralListaComponent,
  ],
  templateUrl: './funcionarios-geral.component.html',
  styleUrl: './funcionarios-geral.component.css',
})
export class FuncionariosGeralComponent {
  funcionarios$: Observable<Funcionarios[]> | null = null;

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.funcionarios$ = this.funcionariosService.list().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
}
