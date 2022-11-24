import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRequerimientoAnimalComponent } from './gestionar-requerimiento-animal.component';

describe('GestionarRequerimientoAnimalComponent', () => {
  let component: GestionarRequerimientoAnimalComponent;
  let fixture: ComponentFixture<GestionarRequerimientoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarRequerimientoAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarRequerimientoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
