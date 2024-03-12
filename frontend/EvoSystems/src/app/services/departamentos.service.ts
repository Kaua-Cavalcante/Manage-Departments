import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Departamentos } from '../model/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  public departmentTitle?: string;
  public departmentId: number = 0;

  private departamentoSelecionado = new BehaviorSubject<any>(null);
  departamentoSelecionado$ = this.departamentoSelecionado.asObservable();

  selecionarDepartamento(departamento: any) {
    this.departamentoSelecionado.next(departamento);
  }

  private readonly API = 'https://localhost:7103/api/Departamento';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Departamentos[]>(this.API);
  }

  loadById(id: string) {
    return this.httpClient.get<Departamentos>(`${this.API}/${id}`);
  }

  save(record: Partial<Departamentos>) {
    console.log(record);
    if (record.id) {
      console.log('update', record);
      return this.update(record);
    }
    console.log('create', record);
    return this.create(record);
  }

  private create(record: Partial<Departamentos>) {
    return this.httpClient.post<Departamentos>(this.API, record);
  }

  private update(record: Partial<Departamentos>) {
    return this.httpClient.put<Departamentos>(`${this.API}/${record.id}`, record)
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }
}
