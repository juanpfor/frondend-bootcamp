import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEspecieComponent } from './actualizar-especie.component';

describe('ActualizarEspecieComponent', () => {
  let component: ActualizarEspecieComponent;
  let fixture: ComponentFixture<ActualizarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
