import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosGeralListaComponent } from './funcionarios-geral-lista.component';

describe('FuncionariosGeralListaComponent', () => {
  let component: FuncionariosGeralListaComponent;
  let fixture: ComponentFixture<FuncionariosGeralListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionariosGeralListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionariosGeralListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
