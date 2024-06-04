import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }

  public getUsuario(cedula: number):Observable<Cliente[]> {

    const url = `${environment.ApiTurnos}/login/${cedula}`;
    return this.http.get<Cliente[]>(url);
  }

  public postUsuario(usuario: Cliente):Observable<Cliente> {
    const url = `${environment.ApiTurnos}/login`;
    return this.http.post<Cliente>(url,usuario);
  }
}
