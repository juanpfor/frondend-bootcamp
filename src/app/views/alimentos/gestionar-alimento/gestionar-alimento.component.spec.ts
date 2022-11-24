import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAlimentoComponent } from './gestionar-alimento.component';

describe('GestionarAlimentoComponent', () => {
  let component: GestionarAlimentoComponent;
  let fixture: ComponentFixture<GestionarAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
