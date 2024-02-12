import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Funcionarios } from '../../model/funcionarios';

@Component({
  selector: 'app-funcionarios-geral-lista',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './funcionarios-geral-lista.component.html',
  styleUrl: './funcionarios-geral-lista.component.css'
})
export class FuncionariosGeralListaComponent {

  @Input() funcionarios: Funcionarios[] = [];

  readonly displayedColumns = ['id', 'nome', 'rg', 'foto'];
}
