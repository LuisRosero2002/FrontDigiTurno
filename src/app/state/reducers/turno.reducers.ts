import { createReducer, on } from '@ngrx/store';

// import { retrievedBookList } from './books.actions';
import { Turno } from '../../core/models/turno.model';
// import { getTurno } from '../actions/turnos.actions';
import { TurnosState } from 'src/app/core/models/turnos.state';
import * as TurnosActions from '../../state/actions/turnos.actions';

export const initialState: TurnosState = { turnos: [] ,loading: false }

// export const turnosReducer = createReducer(
//   initialState,
//   on(getTurno, (state,{itmes}) => {    
//     return {...state , items:itmes}
//   })
// );

const _turnosReducer = createReducer(
  initialState,
  on(TurnosActions.cargarTurnos, (state) => ({ ...state, loading: true })),
  on(TurnosActions.cargarTurnosSuccess, (state, { turnos }) => ({
    ...state,
    turnos,
    loading: false,
  })),
  on(TurnosActions.llamarTurno, (state) => {
    const index = state.turnos.findIndex(turno => turno.ESTADO_DESCRIPCION === 'En Espera');
    if (index !== -1) {
      const updatedTurno = { ...state.turnos[index], estadoDescripcion: 'Llamado' };
      const updatedTurnos = [...state.turnos];
      updatedTurnos[index] = updatedTurno;
      return { ...state, turnos: updatedTurnos };
    }
    return state;
  })
);

export function turnosReducer(state: any, action: any) {
  return _turnosReducer(state, action);
}