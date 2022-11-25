import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEspeciesComponent } from './registrar-especies.component';

describe('RegistrarEspeciesComponent', () => {
  let component: RegistrarEspeciesComponent;
  let fixture: ComponentFixture<RegistrarEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEspeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
