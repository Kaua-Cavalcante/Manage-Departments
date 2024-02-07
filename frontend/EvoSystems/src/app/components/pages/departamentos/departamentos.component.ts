import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Departamentos } from '../../../model/departamentos';
import { DepartamentosService } from '../../../services/departamentos.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { DepartamentoListaComponent } from '../../departamento-lista/departamento-lista.component';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIcon,
    MatProgressSpinnerModule,
    DepartamentoListaComponent
  ],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
})
export class DepartamentosComponent {
  departamentos$: Observable<Departamentos[]> | null = null;

  constructor(
    private departmentsService: DepartamentosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.departamentos$ = this.departmentsService.list().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onSelect(departamento: Departamentos) {
    this.router.navigate([departamento.sigla, departamento.id], { relativeTo: this.route });
    this.departmentsService.departmentTitle = departamento.nome;
    this.departmentsService.departmentId = departamento.id;
    this.departmentsService.selecionarDepartamento(departamento);

    console.log(this.departmentsService.departmentTitle, this.departmentsService.departmentId);
  }

  onEdit(departamento: Departamentos) {
    this.router.navigate(['editar', departamento.id], { relativeTo: this.route })
  }

  onRemove(departamento: Departamentos) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse departamento?'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.departmentsService.remove(departamento.id).subscribe(() => {
          this.refresh();
          this.snackBar.open('Departamento removido com sucesso!', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        });
      }
    });
  }
}
