import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosGeralComponent } from './funcionarios-geral.component';

describe('FuncionariosGeralComponent', () => {
  let component: FuncionariosGeralComponent;
  let fixture: ComponentFixture<FuncionariosGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionariosGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionariosGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
