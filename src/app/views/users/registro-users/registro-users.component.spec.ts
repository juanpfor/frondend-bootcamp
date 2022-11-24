import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsersComponent } from './registro-users.component';

describe('RegistroUsersComponent', () => {
  let component: RegistroUsersComponent;
  let fixture: ComponentFixture<RegistroUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
