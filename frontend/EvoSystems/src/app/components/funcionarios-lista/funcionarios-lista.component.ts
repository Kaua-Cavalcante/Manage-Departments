import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Funcionarios } from '../../model/funcionarios';

@Component({
  selector: 'app-funcionarios-lista',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './funcionarios-lista.component.html',
  styleUrl: './funcionarios-lista.component.css'
})
export class FuncionariosListaComponent {

  @Input() funcionarios: Funcionarios[] = [];

  readonly displayedColumns = ['id', 'nome', 'rg', 'foto', 'actions'];

  constructor() { }
}
