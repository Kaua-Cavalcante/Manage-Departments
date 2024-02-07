import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Departamentos } from '../model/departamentos';
import { DepartamentosService } from '../services/departamentos.service';

export const departamentosResolver: ResolveFn<Observable<Departamentos>> = (route, state, service: DepartamentosService =
inject(DepartamentosService)) => {
  if (route.params && route.params['id']){
    return service.loadById(route.params['id']);
  }
  return of({id: 0, nome: '', sigla: ''});
};
