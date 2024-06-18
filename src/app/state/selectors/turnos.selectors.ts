import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TurnosState } from 'src/app/core/models/turnos.state';

export const selectFeature = (state: AppState) => state.itemTurnos;

export const selectTurnosFeature = createSelector(
  selectFeature,
  (state: TurnosState) => state.turnos
);