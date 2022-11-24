import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecieComponent } from './listar-especie.component';

describe('ListarEspecieComponent', () => {
  let component: ListarEspecieComponent;
  let fixture: ComponentFixture<ListarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
