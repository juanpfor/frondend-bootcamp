import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPreparacionesComponent } from './detail-preparaciones.component';

describe('DetailPreparacionesComponent', () => {
  let component: DetailPreparacionesComponent;
  let fixture: ComponentFixture<DetailPreparacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPreparacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPreparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
