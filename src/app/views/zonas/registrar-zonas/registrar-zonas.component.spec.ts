import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarZonasComponent } from './registrar-zonas.component';

describe('RegistrarZonasComponent', () => {
  let component: RegistrarZonasComponent;
  let fixture: ComponentFixture<RegistrarZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
