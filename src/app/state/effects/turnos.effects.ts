import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TurnosActions from '../actions/turnos.actions';
import { ServicioService } from 'src/app/modules/servicios/services/servicio.service';

@Injectable()
export class TurnosEffects {
  
  cargarTurnos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TurnosActions.cargarTurnos),
      mergeMap(() =>
        this.turnoService.getTurnos().pipe(
          map((turnos) => TurnosActions.cargarTurnosSuccess({ turnos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private turnoService: ServicioService
  ) {}
}