import { Routes } from '@angular/router';
import { DepartamentoFormComponent } from './components/pages/departamento-form/departamento-form.component';
import { DepartamentosComponent } from './components/pages/departamentos/departamentos.component';
import { FuncionarioFormComponent } from './components/pages/funcionario-form/funcionario-form.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { HomeComponent } from './components/pages/home/home.component';
import { departamentosResolver } from './guards/departamentos.resolver';

export const routes: Routes = [
    { 'path': '', component: HomeComponent, title: "Evo Systems" },
    { 'path': 'departamentos', component: DepartamentosComponent, title: "Departamentos" },
    { 'path': 'departamentos/novo', component: DepartamentoFormComponent, resolve: { departamento: departamentosResolver }, title: "Novo Departamento" },
    { 'path': 'departamentos/editar/:id', component: DepartamentoFormComponent, resolve: { departamento: departamentosResolver }, title: "Editar Departamento" },
    { 'path': 'departamentos/:sigla/:id', component: FuncionariosComponent },
    { 'path': 'departamentos/:sigla/:id/novo', component: FuncionarioFormComponent, title: "Novo Funcionario" }
];
