import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRequerimientoAnimalComponent } from './registrar-requerimiento-animal.component';

describe('RegistrarRequerimientoAnimalComponent', () => {
  let component: RegistrarRequerimientoAnimalComponent;
  let fixture: ComponentFixture<RegistrarRequerimientoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarRequerimientoAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarRequerimientoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
