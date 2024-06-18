import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio, Turnos, Turno_Descripcion } from '../models/model.services';
import { Turno } from 'src/app/core/models/turno.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private turnosSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public turnos$ = this.turnosSubject.asObservable();
  private channel: BroadcastChannel;

  constructor(
    private http: HttpClient
  ) {

    this.channel = new BroadcastChannel('nuevosTurnos');
    this.channel.onmessage = event => {
      const nuevoTurno = event.data;
      this.agregarNuevoTurno(nuevoTurno);
    };

   }

  public getServicios():Observable<Servicio[]> {

    const url = `${environment.ApiTurnos}/servicios`;
    return this.http.get<Servicio[]>(url);
  }

  public postTurno(dataTurno: Turnos):Observable<Turno> {

    const url = `${environment.ApiTurnos}/turno`;
    return this.http.post<Turno>(url,dataTurno);

  }

  public getTurnos():Observable<Turno[]> {

    const url = `${environment.ApiTurnos}/turnos`;
    return this.http.get<Turno[]>(url);
  }

  private agregarNuevoTurno(nuevoTurno: any) {
    const turnosActuales = this.turnosSubject.value;
    const nuevosTurnos = [nuevoTurno, ...turnosActuales];
    this.turnosSubject.next(nuevosTurnos);
  }

  enviarNuevoTurno(nuevoTurno: any) {
     if (this.channel) {
      this.channel.postMessage(nuevoTurno);
    } else {
      console.error('BroadcastChannel no está inicializado correctamente.');
    }
  }
}
