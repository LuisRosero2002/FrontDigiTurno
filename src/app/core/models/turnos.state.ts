import { Turno } from "./turno.model";

export interface TurnosState {
    turnos: Turno[];
    loading: boolean;
}