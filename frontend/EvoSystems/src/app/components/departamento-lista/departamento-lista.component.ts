import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Departamentos } from '../../model/departamentos';

@Component({
  selector: 'app-departamento-lista',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatButtonModule],
  templateUrl: './departamento-lista.component.html',
  styleUrl: './departamento-lista.component.css'
})


export class DepartamentoListaComponent {

  @Input() departamentos: Departamentos[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() openDepartment = new EventEmitter(false);

  readonly displayedColumns = ['id', 'nome', 'sigla', 'actions'];

  constructor() { }

  onEdit(departamento: Departamentos) {
    this.edit.emit(departamento);
  }

  onRemove(departamento: Departamentos) {
    this.remove.emit(departamento);
  }

  onSelect(departamento: Departamentos) {
    this.openDepartment.emit(departamento)
  }
}
