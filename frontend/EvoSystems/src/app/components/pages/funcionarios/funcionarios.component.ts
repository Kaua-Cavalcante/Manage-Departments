import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Funcionarios } from '../../../model/funcionarios';
import { DepartamentosService } from '../../../services/departamentos.service';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
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
  departmentId: number = this.departamentosService.departmentId;

  constructor(
    private funcionariosService: FuncionariosService,
    private departamentosService: DepartamentosService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.departamentosService.departmentId$.subscribe((departmentId) => {
      this.refresh(departmentId);
    })
  }

  refresh(departmentId: number) {
    this.funcionarios$ = this.funcionariosService.listByDepartment(departmentId).pipe(
      catchError((error) => {
        console.log(error)
        return of([]);
      })
    );
  }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onRemove(funcionario: Funcionarios) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse departamento?'
    });

    dialogRef .afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.funcionariosService.remove(funcionario.id).subscribe(() => {
          this.refresh(this.departamentosService.getDepartmentId());
          this.snackBar.open('Funcionario removido com sucesso!', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          })
        })
      }
    })
  }

}
