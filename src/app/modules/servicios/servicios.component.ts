import { Component, OnInit } from '@angular/core';
import { ServicioService } from './services/servicio.service';
import { Router } from '@angular/router';
import { Servicio, Turnos, Turno_Descripcion } from './models/model.services';
import Swal from 'sweetalert2';
import { Observable, forkJoin, map } from 'rxjs';
import { Turno } from 'src/app/core/models/turno.model';
import { Store } from '@ngrx/store';
import { selectTurnosFeature } from 'src/app/state/selectors/turnos.selectors';
// import { getTurno } from 'src/app/state/actions/turnos.actions';
import * as TurnosActions from '../../state/actions/turnos.actions';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent implements OnInit {

  dataServicios:Servicio[]
  displayModal: boolean = false 
  dataTable:any
  turnosPendientes$: Observable<Turno[]>;

  constructor(
    private servicioService: ServicioService,

  ) { 
   
  }

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe(
      res => {
        if(res.length > 0){
          this.dataServicios = res
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
      
          Toast.fire({
            icon: 'success',
            title: 'Bienvenido, selecciona un servicio',
          });
          
        }
      },error => {
        console.error(error);
      }
    )
  }

  servicio(servicioSelected:Servicio){

    const inputTurno:Turnos = {
      ID_CLIENTE:JSON.parse(sessionStorage.getItem("session"))['ID_CLIENTE'],
      ID_SERVICIO:servicioSelected.ID_SERVICIO 
    }
  
    this.servicioService.postTurno(inputTurno).subscribe( res => {
      if(Object.keys(res).length){
        this.dataTable = [res]
        this.displayModal = true
        this.servicioService.enviarNuevoTurno(res);
      
      }
    },error => {
      console.error(error);
      
    });
    
  }

}
