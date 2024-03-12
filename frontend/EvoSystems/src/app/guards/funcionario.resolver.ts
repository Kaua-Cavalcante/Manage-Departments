import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Funcionarios } from '../model/funcionarios';
import { FuncionariosService } from '../services/funcionarios.service';

export const funcionarioResolver: ResolveFn<Observable<Funcionarios>> = (
  route,
  state,
  service: FuncionariosService = inject(FuncionariosService)
) => {
  if (route.params && route.params['id']) {
    return service.loadById(route.params['id']);
  }
  return of({ id: 0, nome: '', rg: '', foto: '', departamentoId: 0 });
};
