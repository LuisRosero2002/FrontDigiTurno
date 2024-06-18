import { createAction, props } from '@ngrx/store';
import { Turno } from '../../core/models/turno.model';


export const cargarTurnos = createAction('[Turno] Cargar Turnos');
export const cargarTurnosSuccess = createAction(
  '[Turno] Cargar Turnos Success',
  props<{ turnos: Turno[] }>()
);
export const llamarTurno = createAction(
  '[Turno] Llamar Turno'
);
