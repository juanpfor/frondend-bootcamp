import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarZonasComponent } from './gestionar-zonas.component';

describe('GestionarZonasComponent', () => {
  let component: GestionarZonasComponent;
  let fixture: ComponentFixture<GestionarZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
