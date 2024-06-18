import { ActionReducerMap } from "@ngrx/store";
import { Turno } from "../core/models/turno.model";
import { turnosReducer } from "./reducers/turno.reducers";
import { TurnosState } from "../core/models/turnos.state";

export interface AppState {
    itemTurnos: TurnosState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    itemTurnos: turnosReducer
}