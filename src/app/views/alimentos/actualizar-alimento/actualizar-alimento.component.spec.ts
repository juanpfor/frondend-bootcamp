import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAlimentoComponent } from './actualizar-alimento.component';

describe('ActualizarAlimentoComponent', () => {
  let component: ActualizarAlimentoComponent;
  let fixture: ComponentFixture<ActualizarAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
