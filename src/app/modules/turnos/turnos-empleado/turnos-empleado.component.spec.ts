import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosEmpleadoComponent } from './turnos-empleado.component';

describe('TurnosEmpleadoComponent', () => {
  let component: TurnosEmpleadoComponent;
  let fixture: ComponentFixture<TurnosEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
