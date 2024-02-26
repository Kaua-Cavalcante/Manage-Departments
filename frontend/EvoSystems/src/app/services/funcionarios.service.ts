import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionarios } from '../model/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = 'https://localhost:7103/api/Funcionario';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Funcionarios[]>(this.API);
  }

  listByDepartment(departmentId: number): Observable<Funcionarios[]> {
    return this.httpClient.get<Funcionarios[]>(`${this.API}/by-department/${departmentId}`);
  }

  save(record: Partial<Funcionarios>) {
    console.log(record);
    if(record.id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Funcionarios>) {
    return this.httpClient.post<Funcionarios>(this.API, record);
  }

  private update(record: Partial<Funcionarios>) {
    return this.httpClient.put<Funcionarios>(`${this.API}/${record.id}`, record)
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }
}