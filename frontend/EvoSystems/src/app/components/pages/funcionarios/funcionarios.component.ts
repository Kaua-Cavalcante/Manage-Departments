import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { Funcionarios } from '../../../model/funcionarios';
import { DepartamentosService } from '../../../services/departamentos.service';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { FuncionariosListaComponent } from '../../funcionarios-lista/funcionarios-lista.component';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [
    FuncionariosListaComponent,
    MatIcon,
    MatProgressSpinner,
    MatCard,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css',
})
export class FuncionariosComponent {
  funcionarios$: Observable<Funcionarios[]> | null = null;

  title = this.departamentosService.departmentTitle;

  constructor(
    private funcionariosService: FuncionariosService,
    private departamentosService: DepartamentosService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.funcionarios$ = this.funcionariosService.list()
  }

}
