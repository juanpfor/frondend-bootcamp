import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRequerimientoAnimalComponent } from './actualizar-requerimiento-animal.component';

describe('ActualizarRequerimientoAnimalComponent', () => {
  let component: ActualizarRequerimientoAnimalComponent;
  let fixture: ComponentFixture<ActualizarRequerimientoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarRequerimientoAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarRequerimientoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
