import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoListaComponent } from './departamento-lista.component';

describe('DepartamentoListaComponent', () => {
  let component: DepartamentoListaComponent;
  let fixture: ComponentFixture<DepartamentoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartamentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
