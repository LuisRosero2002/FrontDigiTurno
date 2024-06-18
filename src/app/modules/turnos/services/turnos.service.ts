import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuario } from '../../auth/models/models';
import { Turno } from 'src/app/core/models/turno.model';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(
    private http: HttpClient
  ) { }


  public getTurnos():Observable<Turno[]> {

    const url = `${environment.ApiTurnos}/turnos`;
    return this.http.get<Turno[]>(url);
  }
}
