import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio, Turno, Turno_Descripcion } from '../models/model.services';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    private http: HttpClient
  ) { }

  public getServicios():Observable<Servicio[]> {

    const url = `${environment.ApiTurnos}/servicios`;
    return this.http.get<Servicio[]>(url);
  }

  public postTurno(dataTurno: Turno):Observable<Turno_Descripcion> {

    const url = `${environment.ApiTurnos}/turno`;
    return this.http.post<Turno_Descripcion>(url,dataTurno);

  }
}
