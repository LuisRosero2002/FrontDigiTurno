import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicios/services/servicio.service';
import { Turno } from 'src/app/core/models/turno.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turnos-empleado',
  templateUrl: './turnos-empleado.component.html',
  styleUrls: ['./turnos-empleado.component.sass']
})
export class TurnosEmpleadoComponent implements OnInit {

  idEmpleado: number
  dataAux:any = []
  dataTurnos: Turno = {
    ID: null,
    NOMBRE_EMPLEADO: null,
    SERVICIO_DESCRIPCION: null,
    ESTADO_DESCRIPCION: null,
    FECHA: null,
    LUGAR: null,
    CLIENTE: null
  };

  constructor(
    private route: ActivatedRoute,
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idEmpleado = parseInt(params.get('id'));
    });

    this.siguinteTurno();
    
  }

  mostrarAlerta() {
    Swal.fire({
      title: 'Bienvenido',
      text: 'Has accedido a la vista de turnos del empleado ' + this.dataTurnos.NOMBRE_EMPLEADO,
      icon: 'info'
    });
  }

  siguinteTurno() {
    this.servicioService.siguienTurno(this.idEmpleado).subscribe(res => {
      if ([res].length === 0) {
        Swal.fire({
          title: `¡Buen trabajo, ${this.dataTurnos.NOMBRE_EMPLEADO}!`,
          text: "No hay más turnos",
          icon: "success"
        });
      } else {
        this.dataTurnos = res;
        if(this.dataTurnos.ID && this.dataAux.length === 0){
          this.mostrarAlerta();
          this.dataAux =[this.dataTurnos]
        }else{
          if(!this.dataTurnos.ID){
            Swal.fire({
              title: `¡Buen trabajo!`,
              text: "No hay más turnos",
              icon: "success"
            });
          }
        }
        this.servicioService.getTurnos().subscribe(res2 => {
          this.servicioService.enviarNuevoTurno(res2);
        }, error => {
          console.error(error);
          Swal.fire({
            title: "Error",
            text: "Ocurrió un error al obtener los turnos",
            icon: "error"
          });
        });
        console.log(this.dataTurnos);
      }
    }, error => {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al obtener el siguiente turno",
        icon: "error"
      });
    });
  }

  finTurno() {
    const dataInput = { ID: this.dataTurnos['ID'] };
    if (dataInput) {
      this.servicioService.finTurno(dataInput).subscribe(res => {
        if ([res].length === 0) {
          // Swal.fire({
          //   title: `¡Buen trabajo!`,
          //   text: "No hay más turnos",
          //   icon: "success"
          // });
        } else {
          Swal.fire({
            title: `¡ Turno Finalizado !`,
            text: `${res.LUGAR}`,
            icon: "success"
          });
          this.servicioService.getTurnos().subscribe(res2 => {
            this.servicioService.enviarNuevoTurno(res2);
          }, error => {
            console.error(error);
            Swal.fire({
              title: `¡Buen trabajo!`,
              text: "No hay más turnos",
              icon: "success"
            });
          });
          console.log(this.dataTurnos);
        }
      }, error => {
        console.error(error);
        Swal.fire({
          title: `¡Buen trabajo!`,
          text: "No hay más turnos",
          icon: "success"
        });
      });
    } else {
      // Swal.fire({
      //   title: `¡Buen trabajo, ${this.dataTurnos.NOMBRE_EMPLEADO}!`,
      //   text: "No hay más turnos",
      //   icon: "success"
      // });
    }
  }
}
