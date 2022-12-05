import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPreparacionesComponent } from './gestionar-preparaciones.component';

describe('GestionarPreparacionesComponent', () => {
  let component: GestionarPreparacionesComponent;
  let fixture: ComponentFixture<GestionarPreparacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarPreparacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarPreparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
