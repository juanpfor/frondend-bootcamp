import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRequerimientoAnimalComponent } from './detalles-requerimiento-animal.component';

describe('DetallesRequerimientoAnimalComponent', () => {
  let component: DetallesRequerimientoAnimalComponent;
  let fixture: ComponentFixture<DetallesRequerimientoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRequerimientoAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesRequerimientoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
